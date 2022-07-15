import React from 'react';

export default class ContainerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "TechnoFunnel"
        }
    }

    showName = () => {
        debugger;
        return this.state.name
    }

    render() {
        return <h1>Name is {this.showName()}</h1>
    }
}

