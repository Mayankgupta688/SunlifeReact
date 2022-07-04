import ReactDOM from "react-dom";
import React from "react";

import HeaderComponent from "./components/HeaderComponent";
import OtherData, { OtherContentComponent as MyComponent } from "./components/ContentComponent";
import FooterComponent from "./components/FooterComponent";

ReactDOM.render((
    <div>
       <HeaderComponent></HeaderComponent><hr/>
       <OtherData></OtherData>
       <MyComponent></MyComponent><hr/>
       <FooterComponent></FooterComponent>
       
    </div>
), document.getElementById("root"));
