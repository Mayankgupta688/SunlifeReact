import { useRef } from "react";
import useCustomTimeHook from "./CustomTimeHook";

export default function UseRefComponent() {
    var elementReference = useRef();

    var [curentTime] = useCustomTimeHook()

    function updateData() {
        debugger;
        elementReference.current.style.color = "red";
        elementReference.current.innerText = "Welcome to TechnoFunnel";
        console.dir(elementReference)
    }

    return (
        <div>
            <h1>Time is: {curentTime}</h1>
            <h1 ref={elementReference}>Hello World...</h1>
            <input type="button" value="Click to Update" onClick={updateData} />
        </div>
    )
}