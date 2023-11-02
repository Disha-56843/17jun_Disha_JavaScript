import React from "react";
import {add,sub,multi,dv} from "./calclogic";

export default function Calc() {
    return (
        <div>
            <center>
                <h1>Calculator</h1>

                <button onClick={add}>Addition</button>
                <button onClick={sub}>Substraction</button>
                <button onClick={multi}>Multiplication</button>
                <button onClick={dv}>Division</button>
            </center>



        </div>
    )
}