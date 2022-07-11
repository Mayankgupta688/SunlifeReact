import React from 'react';

export default class ShouldComponentUpdateSample extends React.PureComponent
 {
    constructor() {
        super();

        this.sampleData = 0
        this.state = {
            counter: 0
        }
    }

    updateCounter = () => {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        })
    }

    updateSampleCounter = () => {
        this.sampleData =  this.sampleData + 1;
        this.forceUpdate();
    }

    render() {
        debugger
        alert("Called");
        return (
            <>
                <h1>Counter Value is: {this.state.counter}</h1>
                <h1>Sample Counter Value is: {this.sampleData}</h1>
                <input type="button" onClick={this.updateSampleCounter} value="Update Sample Counter" />
                <input type="button" onClick={this.updateCounter} value="Update Counter" /><hr/><br/>
                <ChildComponent counter={this.state.counter}></ChildComponent>
            </>
        )
    }
}


class ChildComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        }    
    }

    updateTimer = () => {
        this.setState({
            timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        })
    }

    shouldComponentUpdate(nextProps, nextState) {

        // Previous Values: this.state, this.props
        // Next Values: nextProps, nextState

        debugger;
        return true;
    }

    render() {
        return (
            <>
                <h2>Current Time is: {this.state.timer}</h2>
                <h3>Counter from Parent {this.props.counter}</h3>
                <input type="button" onClick={this.updateTimer} value="Update Timer" />
            </>
        )
    }
}