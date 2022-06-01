import React, { useState } from "react";
import Classes from "./Textbox.module.css";

interface TextboxProps {
    text: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const Textbox = ({ text, setValue }: TextboxProps) => {

    const [dropping, setDropping] = useState<boolean>(false);

    const isInput = typeof setValue !== "undefined";
    function focus(event: React.FocusEvent<HTMLTextAreaElement>): void {
        event.target.select();
    }

    function dragEnter(): void {
        setDropping(true);
    }

    function dragLeave(): void {
        setDropping(false);
    }

    async function handleDrop(event: React.DragEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const text = await files[0].text();
        if (isInput) setValue(text);
        dragLeave();
    }

    const classList = [Classes.textbox];
    if (dropping) classList.push(Classes.dropping);

    return (
        <textarea
            className={classList.join(" ")}
            defaultValue={text}
            placeholder={isInput ? (dropping ? "Drop file here . . ." : "Text here . . .") : "Output here . . ."}
            onFocus={focus}
            readOnly={!isInput}

            onChange={isInput ? (event) => setValue(event.target.value) : undefined}
            onDragEnter={isInput ? () => dragEnter() : undefined}
            onDragLeave={isInput ? () => dragLeave() : undefined}
            onDrop={isInput ? (event) => handleDrop(event) : undefined}
        >
        </textarea>
    );
}

export default Textbox;