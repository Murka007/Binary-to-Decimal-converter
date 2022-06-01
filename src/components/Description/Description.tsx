import React from "react";
import Classes from "./Description.module.css";
import logo from "../../img/logo.svg";

const Description = () => {
    return (
        <header className={Classes.description}>
            <div><img src={logo}></img></div>
            <article>
                <h1>Binary to Decimal converter</h1>
                <p>A tool that allows to convert numbers from one number system to another</p>
            </article>
        </header>
    );
}

export default Description;