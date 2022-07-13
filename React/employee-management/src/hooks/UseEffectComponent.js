import { useState, useEffect} from "react";

export default function UseEffectComponent() {
    
    var [counter, setCounter] = useState(1);
    var [timer, setTimer] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());

    useEffect(() => {
        debugger;
        // Used as Constructor/ componentDidMount
        console.log("Component Did Mount")

        return () => {
            // Used as a Destructor
            console.log("Function Called")
        }
    }, [])
    
    useEffect(() => {
        debugger;
        // Used as componentDidUpdate
        console.log("Component Did Update")

        return () => {
            // Called every time before this useEffect is triggered...
            console.log("Function Called")
        }
    })

    useEffect(() => {
        debugger;
        // Used as componentDidUpdate
        console.log("Counter Updates")
    }, [counter])

    useEffect(() => {
        debugger;
        // Used as componentDidUpdate
        console.log("Timer Updates")
    }, [timer])

    useEffect(() => {
        debugger;
        // Used as componentDidUpdate
        console.log("Timer Updates")
    }, [timer, counter])

    function incrementValue() {
        setCounter((counter) => {
            return counter + 1
        })
    }

    function updateTimer() {
        setTimer(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
    }

    return (
        <>
            <h1>Counter Value is {counter}</h1>
            <h1>Timer Value is {timer}</h1>
            <input type="button" onClick={incrementValue} value="Increment" />
            <input type="button" onClick={updateTimer} value="Update Timer" />
        </>
    )
}