import React from "react";
import Axios from "axios"
import ShowEmployee  from "../components/ShowEmployee";

export default class EmployeeListComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        debugger;
        return (
            <>
                <h1>The Employee Count is: {this.state.employeeList.length}</h1>
                {this.state.employeeList.map((employee) => {
                    return <ShowEmployee history={this.props.history} employee={employee}></ShowEmployee>
                })}
            </>
        )
    }

    componentDidMount() {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login/").then((response) => {
            debugger;
            this.setState({
                employeeList: response.data
            })
        }, () => {
            alert("Check For URL. Maybe not available...")
        })
    }
}

