import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        super();
        

        this.userName = "Mayank";
        this.timer = 12;

        this.state = {
            timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        }

        setInterval(() => {
            debugger;
            this.setState({
                timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
        }, 1000)
    }

    render() {
        debugger;
        return <h1>The Time is {this.state.timer}</h1>
    }
}