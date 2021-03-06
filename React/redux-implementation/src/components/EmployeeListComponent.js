import Axios from 'axios';
import React from 'react';

import { connect } from "react-redux";

import * as actions from "../actions/employeeAction";

class EmployeeListComponent extends React.Component {

    render() {
        debugger;
        return (
            <>
                <h1>Employee List is Given Below</h1>

                {this.props.employees && (
                    <>
                        {this.props.employees.map((employee) => {
                            return (
                                <>
                                    <h2>Employee Name is {employee.name}</h2>    
                                </>
                            )
                            
                        })}
                    </>
                )}

                <input type="button" value="Get Data" />
                <hr/>
            </>
        )
    }

}

// Connect the data from the store, Actions that are required by the component from Redux

// Connect = which is a part of React-redux, Middleware - responsible for react and redux interface.

function mapPropsFromStore(store) {
    debugger;
    return {
        employees: store.employees
    }
}

var EmployeeListComponentWrapper = connect(mapPropsFromStore, actions)(EmployeeListComponent)

export default EmployeeListComponentWrapper;