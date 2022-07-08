import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import EmployeeListComponent from "../classComponents/EmployeeListComponent";
import ShowSpecificEmployee from "../classComponents/ShowSpecificEmployee";

export default class MainAppComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{padding: "10px", margin: "10px"}}>
                    <h1>This is Application Header</h1>
                    <nav>
                        <a href="/home" style={{margin: "5px"}}>Home</a>
                        <a href="/help" style={{margin: "5px"}}>Help</a>
                        <a href="/about" style={{margin: "5px"}}>About</a><br/><br/>

                        <Link style={{margin: "5px"}} to="/home">Home SPA</Link>
                        <Link style={{margin: "5px"}} to="/help">Help SPA</Link>
                        <Link style={{margin: "5px"}} to="/about">About SPA</Link> 
                        <Link style={{margin: "5px"}} to="/employees">List SPA</Link>
                    </nav>
                    <hr/><br/>

                    <div style={{height: "400px", border: "1px solid red", padding: "10px", overflow: "scroll"}}>
                        <h2>This is the Content Page of the Application</h2><br/><br/>

                            <Switch>
                                <Route exact path="/" component={HomeComponent}></Route>
                                <Route exact path="/home" component={HomeComponent}></Route>
                                <Route exact path="/help" component={HelpComponent}></Route>
                                <Route exact path="/about" component={AboutComponent}></Route>
                                <Route exact path="/employees" component={EmployeeListComponent}></Route>
                                <Route exact path="/employees/:empId" component={ShowSpecificEmployee}></Route>
                                <Route component={PageNotFound}></Route>
                            </Switch>
              
                    </div><hr/><br/>

                    <h3>This is Footer Component</h3>
                </div>
            </BrowserRouter>
        )
    }
}

function PageNotFound() {
    return <h1>The Page Specified do not Work/Exists</h1>
}

function HomeComponent() {
    return <h1>This is Home Component</h1>
}


function HelpComponent() {
    return <h1>This is Help Component</h1>
}


function AboutComponent() {
    return <h1>This is About Component</h1>
}

