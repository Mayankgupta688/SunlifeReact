import React from "react";
import Axios from "axios"

export default class GetEmployeeDataComponent extends React.Component {
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
                    return <ShowEmployee employee={employee}></ShowEmployee>
                })}
            </>
        )
    }

    componentDidMount() {
        debugger
        Axios.get("https://15a530e1477e1d20012fa066a.mockapi.io/login/").then((response) => {
            debugger;
            this.setState({
                employeeList: response.data
            })
        }, () => {
            alert("Check For URL. Maybe not available...")
        })
    }
}

function ShowEmployee(props) {
    return (
        <div className="card-data" style={{display: "inline-block", margin: "10px"}}>
            <div className="card">
            <img src="https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=" className="card-img-top" alt={props.employee.name} />
            <div style={{color: "red"}} className="card-body">
                <h5 className="card-title">{props.employee.name}</h5>
                { props.employee.id % 2 === 0 && <p className="card-text">{props.employee.id}: Even Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p> }
                { props.employee.id % 2 === 1 && <p className="card-text">{props.employee.id}: Odd Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p> }
                <input type="button" className="btn btn-primary" value="Delete" />
            </div>
            </div>
        </div>
    )
}