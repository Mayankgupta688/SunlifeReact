import React from 'react';
import ShowEmployee from '../components/ShowEmployee';

import Axios from "axios"

export default class ShowSpecificEmployee extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            employeeDetails: {
                name: "",
                createdAt: "",
                id: "",
                avatar: "https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8="
            }
        }
    }

    changeEmployee = () => {
        debugger;
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                <ShowEmployee employee={this.state.employeeDetails}></ShowEmployee>
                <input type="button" onClick={this.changeEmployee} value="Go Back" />
            </>
        )
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/" + this.props.match.params.empId).then((response) => {
            this.setState({
                employeeDetails: {
                    ...this.state.employeeDetails,
                    id: response.data.id,
                    name: response.data.name,
                    createdAt: response.data.createdAt
                }
            })
        })
    }
}