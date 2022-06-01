import React from "react";
import { formatInput } from "../../converter/Convert";
import Classes from "./Input.module.css";

type changeEvent = React.ChangeEvent<HTMLInputElement>;
interface InputProps {
    value: string;
    from: number;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ value, from, setInput }: InputProps) => {

    function changeHandler(event: changeEvent): void {
        const value = formatInput(event.target.value, from, false);
        event.target.value = value;
        setInput(value);
    }

    return (
        <input 
            onChange={changeHandler}
            onFocus={(event) => event.target.select()}
            className={Classes.input}
            type="text"
            placeholder="Number here . . ."
            value={value}
        ></input>
    );
}

export default Input;