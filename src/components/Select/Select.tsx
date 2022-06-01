import React, { useState } from "react";
import { SelectOptions } from "../../types/types";
import Classes from "./Select.module.css";

interface SelectProps {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

interface IOption {
    readonly value: number;
    readonly label: string;
}

const Select = ({ value, setValue }: SelectProps) => {

    const options: IOption[] = [
        { value: SelectOptions.binary, label: "Binary" },
        { value: SelectOptions.octal, label: "Octal" },
        { value: SelectOptions.decimal, label: "Decimal" },
        { value: SelectOptions.hexadecimal, label: "Hexadecimal" },
        { value: SelectOptions.string, label: "String" }
    ];

    const [opened, setOpened] = useState<boolean>(false);

    function updateValue(value: number): void {
        setOpened(false);
        setValue(value);
    }
    
    const classList = [Classes.select];
    if (opened) classList.push(Classes.active);
    return (
        <div
            tabIndex={0}
            className={classList.join(" ")}
            onClick={() => setOpened(!opened)}
            onBlur={() => setOpened(false)}
        >
            {options[value].label}
            <i className={Classes.icon}></i>
            {
                opened && (
                    <div className={Classes.options}>
                        {
                            options.map((option: IOption) => {
                                return option.value === value ? null : (
                                    <div
                                        key={option.value}
                                        className={Classes.option}
                                        onClick={() => updateValue(option.value)}
                                    >{option.label}</div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Select;