import React from 'react';

var FamilyContextContainer =  React.createContext({})

var FamilyDataProvider = FamilyContextContainer.Provider
var FamilyDataConsumer = FamilyContextContainer.Consumer

var FamilyContextContainerSample =  React.createContext({})

var FamilyDataProviderSample = FamilyContextContainerSample.Provider
var FamilyDataConsumerSample = FamilyContextContainerSample.Consumer

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
                <FamilyDataProvider value={this.state}>
                    <h1>This is Grand Grand Parent</h1>
                    <h2>Village Name is {this.state.village}</h2>
                    <h3>Surname Name is {this.state.surName}</h3>
                    <input type="button" value="Update Village" onClick={this.updateVillage} /><hr/>

                    <FamilyDataProviderSample value={this.state}>
                        <GrandParent></GrandParent>
                    </FamilyDataProviderSample>


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

            <FamilyDataConsumer>
                {(context) => {
                    return <h2>Village Name is {context.village}</h2>
                }}
            </FamilyDataConsumer>

            <FamilyDataConsumerSample>
                {(context) => {
                    return <h2>Village Name is {context.village}</h2>
                }}
            </FamilyDataConsumerSample>
        </>
    )
}