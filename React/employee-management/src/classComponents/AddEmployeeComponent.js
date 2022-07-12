import Axios from 'axios';
import React from 'react';

export default class AddEmployeeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            id: "",
            avatar: "https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=",
            createdAt: ""
        }
    }

    updateInputBox = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    addEmployee = () => {
        Axios.post("http://localhost:4000/employees/", this.state).then(() => {
            this.props.addNewEmployee(this.state)
            this.setState({
                name: "",
                id: "",
                avatar: "https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=",
                createdAt: ""
            })
        });
    }

    render() {
        return (
            <div>
                Enter User Name: <input id="name" type="text" value={this.state.name} onChange={this.updateInputBox} /><br/><br/>
                Enter User Id: <input id="id" type="text" value={this.state.id} onChange={this.updateInputBox} /><br/><br/>
                Enter User Avatar: <input id="avatar" type="text" value={this.state.avatar} onChange={this.updateInputBox} /><br/><br/>
                Enter User Created At: <input id="createdAt" type="text" value={this.state.createdAt} onChange={this.updateInputBox} />
                <input type="button" onClick={this.addEmployee} value="Add Employee" /><br/><br/>
            </div>
        )
    }
}