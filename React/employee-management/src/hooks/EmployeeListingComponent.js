import { useState, useEffect } from "react";
import Axios from "axios";
import AddEmployeeComponent from "../classComponents/AddEmployeeComponent";

export default function EmployeeListingComponent() {
    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {

        // componentDidMount

        Axios.get("http://localhost:4000/employees").then((response) => {
            debugger;
            setEmployeeList(response.data)
        })
    }, [])

    useEffect(() => {

        // componentDidMount + componentDidUpdate

        console.log("Component Re-Rendered...")
    });

    function deleteEmployee(event) {
        var employeeToBeDeleted = event.target.id;

        Axios.delete("http://localhost:4000/employees/" + employeeToBeDeleted).then(() => {
            Axios.get("http://localhost:4000/employees").then((response) => {
                setEmployeeList(response.data)
            })
        });  
    }

    function deleteEmployeeOther(event) {
        var employeeToBeDeleted = event.target.id;

        Axios.delete("http://localhost:4000/employees/" + employeeToBeDeleted).then(() => {
            var newEmployeeList = employeeList.filter((employee) => {
                if(employee.id !== employeeToBeDeleted) {
                    return true;
                } else {
                    return false
                }
            })
    
            setEmployeeList(newEmployeeList)
        });  
    }

    function addNewEmployee(newEmployee) {
        setEmployeeList((employeeList) => {
            return [
                newEmployee,
                ...employeeList
            ]
        })
    }

    return (
        <>
            <h1>Employee List is Given Below:</h1>
            <AddEmployeeComponent addNewEmployee={addNewEmployee}></AddEmployeeComponent>
            {employeeList.map((employee) => {
                return (
                    <div className="card-data" style={{display: "inline-block", margin: "10px", width: "200px"}}>
                        <div className="card">
                            <img src="https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=" className="card-img-top" alt={employee.name} />
                            <div style={{color: "red"}} className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Employee Id: {employee.id} created at: {employee.createdAt}: Even Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" className="btn btn-primary" id={employee.id} value="Delete" style={{marginRight: "5px"}} onClick={deleteEmployee} />
                                <input type="button" className="btn btn-primary" value="Details"  />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}