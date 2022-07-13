import { useState, useEffect } from "react";

export default function useCustomTimeHook() {
    var [time, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
        }, 1000)
    }, [])

    return [time]

}