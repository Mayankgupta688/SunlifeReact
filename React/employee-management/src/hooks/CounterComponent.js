import React, { useState, useEffect } from "react";

export default function CounterComponent() {

    debugger;
    
    var [counter, setCounter] = useState(1);


    useEffect(() => {
        debugger;
    })

    function incrementCounter() {
        setCounter((counter) => {
            return counter + 1;
        })  
    }

    debugger;

    return (
        <>
            <h1>Counter Value is {counter}</h1>
            <input type="button" onClick={incrementCounter} value="Click To Increment Counter" />
        </>
    )
}