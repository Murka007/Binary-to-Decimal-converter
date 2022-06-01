import React, { FC } from "react";
import Classes from "./Button.module.css";

interface ButtonProps {
    type: number;
    handleEvent: (event?: any) => void
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ type, handleEvent, children }) => {
    const classList = [Classes.button];
    if (type === 1) classList.push(Classes.secondary);
    return (
        <button
            className={classList.join(" ")}
            onClick={handleEvent}
        >{children}</button>
    );
}

export default Button;