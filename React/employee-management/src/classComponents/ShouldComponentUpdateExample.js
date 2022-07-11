import React from 'react';

export default class ShouldComponentUpdateSample extends React.PureComponent
 {
    constructor() {
        super();

        this.sampleData = 0
        this.state = {
            arrayData: [10, 20, 30, 40],
            address: {
                street: 100,
                city: "X",
                country: "Y"
            }
        }
    }

    updateArray = () => {
        
        this.setState({
            address: {
                ...this.state.address,
                street: 200  
            },
            arrayData: [...this.state.arrayData, 100]
        })

    }

    render() {
        debugger;
        return (
            <>
                <h1>Counter Value is: {this.state.arrayData.length}</h1>
                <h2>Street Data: {this.state.address.street}</h2>
                <input type="button" onClick={this.updateArray} value="Update Counter" /><hr/><br/>
            </>
        )
    }
}