import React from 'react';

export default class LiftingStateUpComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: "Mayank",
            age: 20
        }
    }

    updateData = (newAge) => {
        this.setState({
            ...this.state,
            age: newAge
        })
    }

    render() {
        return (
            <>
                <h1>User Name in Parent Component is {this.state.userInfo}</h1>
                <h2>User Age in Parent Component is {this.state.age}</h2><hr/>

                <ChildComponent {...this.state} updateData={this.updateData}></ChildComponent>
            </>
        )
    }
}

class ChildComponent extends React.Component {

    constructor() {
        super()

        this.state = {
            inputValue: ""
        }
    }

    updateAge = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    randomFunc = () => { 
        this.props.updateData(this.state.inputValue)
    }


    render() {
        return (
            <>
                <h3>User Name in Child Component is {this.props.userInfo}</h3>
                <h4>User Age in Child Component is {this.props.age}</h4>
                <input type="text" onChange={this.updateAge} value={this.state.inputValue} />
                <input type="button" value="Update Age" onClick={this.randomFunc} /><hr/>
            </>
        )
    }
}