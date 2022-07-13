import React from 'react';

var FamilyContextContainer =  React.createContext({})

var FamilyDataProvider = FamilyContextContainer.Provider;
var FamilyDataConsumer = FamilyContextContainer.Consumer;

export default class GrandGrandParent extends React.Component {
    constructor() {
        super();
        this.state = {
            village: "Haryana",
            surName: "Gupta"
        }
    }

    updateVillage = () => {
        this.setState({
            ...this.state,
            village: "UP"
        })
    }

    render() {
        return (
            <>
                <h1>This is Grand Grand Parent</h1>
                <h2>Village Name is {this.state.village}</h2>
                <h3>Surname Name is {this.state.surName}</h3><hr/>
                <input type="button" value="Update Village" onClick={this.updateVillage} /><hr/>
                <FamilyDataProvider value = {
                    {
                        ...this.state,
                        updateVillage: this.updateVillage
                    }
                }>
                    <GrandParent></GrandParent>
                </FamilyDataProvider>
            </>
        )
    }
}

function GrandParent() {
    return (
        <>
            <h1>This is Grand Parent</h1><hr/>
            <Parent></Parent>
        </>
    )
}

function Parent() {
    return (
        <FamilyDataConsumer>
            {(context) => {
                return (
                    <>
                        <h1>This is Parent Component {context.surName}</h1><hr/>
                        <ChildComponent></ChildComponent>
                    </>
                )
            }}
            
        </FamilyDataConsumer>
    )
}

function ChildComponent() {
    return (
        <>
            <h1>This is Child Component</h1>
            <FamilyDataConsumer>
                {(context) => {
                    debugger;
                    return (
                    <>
                        <h2>Village Name is {context.village}</h2>
                        <input type="button" value="Update Village" onClick={context.updateVillage} /><hr/>
                    </>
                )}}
            </FamilyDataConsumer>
        </>
    )
}