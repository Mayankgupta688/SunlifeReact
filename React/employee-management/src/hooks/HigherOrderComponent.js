import React from "react";
import Axios from "axios";

function higherOrderComponent(SomeComponent, OtherComponent) {
    return class extends React.Component {

        constructor() {
            super();
            this.state = {
                employeeList: []
            }
        }

        render() {
            return (
                <>
                    <h1>This is genaral details</h1>
                    <OtherComponent></OtherComponent>
                    <SomeComponent employeeList={this.state.employeeList}></SomeComponent>
                </>
            )
        }

        componentDidMount() {
            Axios.get("http://localhost:4000/employees").then((response) => {
                debugger;
                this.setState({
                    employeeList: response.data
                })
            })
        }
    }
}

function ComponentOne(props) {
    return <h1>Employee Count is: {props.employeeList.length}</h1>
}

function ComponentTwo(props) {
    return (
        <>
            {props.employeeList.map((employee) => {
                return <h3>Employee Name is: {employee.name}</h3>
            })}
        </>
    )
}

function ComponentThree(props) {
    return (
        <>
            {props.employeeList.map((employee) => {
                return <h3>Employee Name is: {employee.id}</h3>
            })}
        </>
    )
}

function SampleComponent() {
    return <h1>Employee Details given below:</h1>
}

export var ComponentOneWrapper = higherOrderComponent(ComponentOne, SampleComponent)
export var ComponentTwoWrapper = higherOrderComponent(ComponentTwo, SampleComponent)
export var ComponentThreeWrapper = higherOrderComponent(ComponentThree, SampleComponent)