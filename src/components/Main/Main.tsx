import React, { FC, useState } from "react";
import Classes from "./Main.module.css";
import Select from "../Select/Select";
import Textbox from "../Textbox/Textbox";
import { SelectOptions } from "../../types/types";
import Input from "../Input/Input";
import { convert } from "../../converter/Convert";
import Button from "../Button/Button";
import equalSign from "../../img/equalSign.svg";
import deleteSign from "../../img/deleteSign.svg";
import swapSign from "../../img/swapSign.svg";

const Main = () => {
    const [from, setFrom] = useState<number>(SelectOptions.binary);
    const [to, setTo] = useState<number>(SelectOptions.decimal);

    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    function convertData(): void {
        if (!input.length) return;
        const data = convert(input, from, to);
        setOutput(data);
    }

    function resetData(): void {
        setFrom(SelectOptions.binary);
        setTo(SelectOptions.decimal);
        setInput("");
        setOutput("");
    }

    function swapData(): void {
        setFrom(to);
        setTo(from);

        setInput(output);
        setOutput(input);
    }

    return (
        <main className={Classes.main}>
            <div className={Classes.setupContainer}>
                <div className={Classes.group}>
                    <div className={Classes.selectContainer}>
                        <div className="content-wrapper">
                            <label>From</label>
                            <Select value={from} setValue={setFrom}/>
                        </div>
                    </div>

                    <div className={Classes.selectContainer}>
                        <div className="content-wrapper">
                            <label>To</label>
                            <Select value={to} setValue={setTo}/>
                        </div>
                    </div>
                </div>

                <div className={Classes.group}>
                    <Button type={0} handleEvent={convertData}>
                        <img src={equalSign}></img>Convert
                    </Button>
                    <Button type={1} handleEvent={resetData}>
                        <img src={deleteSign}></img>Reset
                    </Button>
                    <Button type={1} handleEvent={swapData}>
                        <img src={swapSign}></img>Swap
                    </Button>
                </div>

                <div className={Classes.group}>
                    <div className="content-wrapper">
                        <label>Enter value</label>
                        {
                            from === SelectOptions.string ? (
                                <Textbox
                                    text={input}
                                    setInput={setInput}
                                />
                            ) : (
                                <Input
                                    value={input}
                                    from={from}
                                    setInput={setInput}
                                />
                            )
                        }
                    </div>
                </div>

                <div className={Classes.group}>
                    <div className="content-wrapper">
                        <label>Output</label>
                        <Textbox text={output}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;