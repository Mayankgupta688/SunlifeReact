import React from "react";
import Axios from "axios"
import ShowEmployee  from "../components/ShowEmployee";
import AddEmployeeComponent  from "../classComponents/AddEmployeeComponent";

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    addNewEmployee = (employeeData) => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    } 

    addNewEmployeeScreen = (employeeData) => {
        this.setState({
            employeeList: [
                ...this.state.employeeList,
                employeeData
            ]
        });
    } 

    deleteEmployeeFromUI = (event) => {
        
        var employeeId = event.target.id;

        var filteredEmployeeList = this.state.employeeList.filter((employee) => {
            return employee.id !== +employeeId
        })

        this.setState({
            employeeList: filteredEmployeeList
        })
    }

    deleteEmployee = (event) => {

        Axios.delete("http://localhost:4000/employees/" + event.target.id).then((response) => {
            alert("Employee Deleted");
            Axios.get("http://localhost:4000/employees").then((response) => {
                this.setState({
                    employeeList: response.data
                })
            })
        })
    }

    render() {
        debugger;
        return (
            <>
                <AddEmployeeComponent addNewEmployee={this.addNewEmployee}></AddEmployeeComponent>
                <h1>The Employee Count is: {this.state.employeeList.length}</h1>
                {this.state.employeeList.map((employee, index) => {
                    return (
                        <>
                            <ShowEmployee deleteEmployee={this.deleteEmployee} history={this.props.history} employee={employee}></ShowEmployee>
                        </>
                    )
                })}
            </>
        )
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            debugger;
            this.setState({
                employeeList: response.data
            })
        }, () => {
            alert("Check For URL. Maybe not available...")
        })
    }
}

