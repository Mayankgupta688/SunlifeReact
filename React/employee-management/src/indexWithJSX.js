import ReactDOM from "react-dom";

import React from "react";

ReactDOM.render((
    React.createElement("div", {}, [
        React.createElement("div", {}, React.createElement("b", {}, "This is Sample Tag")),
        React.createElement("label", {}, "Hello All"),
        React.createElement("p", {}, "This is Sample Para TechnoFunnel")
    ])
), document.getElementById("root"))
