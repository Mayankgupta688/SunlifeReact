import React from 'react';
import InheritContainerComponent from "./InheritContainerComponent"

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
        return <InheritContainerComponent showName={this.showName}></InheritContainerComponent>
    }
}

