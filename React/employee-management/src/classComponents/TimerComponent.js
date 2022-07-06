import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        }
    }

    render() {
        return (
            <>
                <h1>The Time is {this.state.timer}</h1>
            </>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            })
        }, 1000)
    }
}