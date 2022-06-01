import React from "react";
import Classes from "./Textbox.module.css";

type changeEvent = React.ChangeEvent<HTMLTextAreaElement>;
interface TextboxProps {
    text?: string;
    setInput?: React.Dispatch<React.SetStateAction<string>>;
}

const Textbox = ({ text, setInput }: TextboxProps) => {

    const readonly = typeof setInput === "undefined";
    return (
        <textarea
            onChange={!readonly ? (event) => setInput(event.target.value) : undefined}
            className={Classes.textbox}
            placeholder={readonly ? "Output here . . ." : "Text here . . ."}
            defaultValue={text}
            onFocus={readonly ? (event) => event.target.select() : undefined}
            readOnly={readonly}
        >
        </textarea>
    );
}

export default Textbox;