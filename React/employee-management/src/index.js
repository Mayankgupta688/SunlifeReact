import ReactDOM from "react-dom";
import React from "react";

import {ComponentOneWrapper, ComponentTwoWrapper, ComponentThreeWrapper} from "./hooks/HigherOrderComponent";

ReactDOM.render((
    <>
        <ComponentOneWrapper></ComponentOneWrapper><br/><hr/>
        <ComponentTwoWrapper></ComponentTwoWrapper><br/><hr/>
        <ComponentThreeWrapper></ComponentThreeWrapper>
    </>
)
, document.getElementById("root"));