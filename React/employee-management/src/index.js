import ReactDOM from "react-dom";
import React from "react";

import Component from "./components/RestrictUpdate";

var userInfo = {
    name: "Mayank",
    age: 50,
    designation: "Developer",
    salary: 10
}

var cloneData = {
    name: "Mayank",
    age: 50,
    designation: "Developer",
    salary: 10,
    age: 100
}

ReactDOM.render((
    <>
        <h1>User Name is: {userInfo.name}</h1>
        <Component {...userInfo} name={userInfo.name} cloneData={cloneData}></Component>
    </>
), document.getElementById("root"));

setTimeout(function() {
    alert(userInfo.name)
}, 10000)