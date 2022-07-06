import React from 'react';

export default class EventHandlingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            headerColor: "grey",
            data: "Welcome to TechnoFunnel"
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeColor = () => {
        this.setState({
            ...this.state,
            headerColor: "red"
        })
    }

    restoreColor = () => {
        this.setState({
            ...this.state,
            headerColor: "grey"
        })
    }

    onMouseOverEvent = (event) => {
        event.target.style.color = "red";
    }

    onMouseOutEvent = (event) => {
        event.target.style.color = "green";
    }

    getElement = (event) => {
        debugger;
    }

    render() {
        return (
            <div onClick={this.getElement} style={{border: "5px solid grey", padding: "10px", margin: "10px"}}>
                <h1 onMouseOut={this.restoreColor} onMouseOver={this.changeColor} style={{border: "1px solid red", color: this.state.headerColor}}>The Counter value is {this.state.counter}</h1>
                <h2 onMouseOut={this.onMouseOutEvent} onMouseOver={this.onMouseOverEvent} style={{border: "1px solid red"}}>{this.state.data}</h2>
                <input type="button" value="Increment Counter" onClick={this.incrementCounter} />
            </div>
        )
    }
}