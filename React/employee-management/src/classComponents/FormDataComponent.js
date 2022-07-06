import React from 'react';

export default class FormDataComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            placeholder: "Enter Value",
            userAge: 20,
            userDesignation: "Developer",
            userSalary: 1000,
            userPreviousCompany: "Abc"
        }
    }

    updateInputBox = (event) => {
        if(event.target.value.length >= 3) {
            this.setState({
                ...this.state,
                [event.target.id]: event.target.value.replace("_", ",")
            })
        } else {
            alert("You cannot have name less than 3 character")
        }
    }

    render() {
        return (
            <div style={{padding: "10px", margin: "10px"}}>
                <div onChange={this.updateInputBox}>
                    Enter User Name: <input id="userName" type="text" value={this.state.userName} onChange={this.updateInputBox} /><br/><br/>
                    Enter User Age: <input id="userAge" type="text" value={this.state.userAge} onChange={this.updateInputBox} /><br/><br/>
                    Enter User Designation: <input id="userDesignation" type="text" value={this.state.userDesignation} onChange={this.updateInputBox} /><br/><br/>
                    Enter User Salary: <input id="userSalary" type="text" value={this.state.userSalary} onChange={this.updateInputBox} /><br/><br/>
                    Enter User Previous Company: <input id="userPreviousCompany" type="text" value={this.state.userPreviousCompany} onChange={this.updateInputBox} /><br/><br/>
                </div>
            
                Value of Name is {this.state.userName}<br/><br/>
                Value of Age is {this.state.userAge}<br/><br/>
                Value of Designation is {this.state.userDesignation}<br/><br/>
                Value of Salary is {this.state.userSalary}<br/><br/>
                Value of Previous Company is {this.state.userPreviousCompany}<br/><br/>
            
            </div>
        )
    }
}