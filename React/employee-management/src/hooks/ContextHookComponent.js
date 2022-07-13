import React, { useState, useContext } from "react"

var applicationContext = React.createContext({

});

export default function ParentComponent() {
    var [empData] = useState({
        name: "TechnoFunnel",
        age: 10,
        designation: "Developer"
    })

    return (
        <>
            <h1>Employee Name is {empData.name}</h1>
            <applicationContext.Provider value={empData}>
                <ChildComponent></ChildComponent>
            </applicationContext.Provider>
        </>
    )
}

function ChildComponent() {
    var contextDataConsumer = useContext(applicationContext);
    return (
        <>
            <h2>User Age is {contextDataConsumer.age}</h2>
            <h2>User Designation is {contextDataConsumer.designation}</h2>
        </>
    )
}