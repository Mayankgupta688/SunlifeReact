import React from 'react';
import * as action from "../actions/employeeAction";

import { connect } from "react-redux";

class EmployeeCountComponent extends React.Component {

    render() {
        debugger;
        return (
            <>
                <h1>Employee Count is Given Below {this.props.employees.length}</h1>
                <input type="button" value="Delete All" onClick={this.props.deleteAllEmployee} /><hr/>
            </>
        )
    }
}

function mapPropsFromStore(store) {
    return {
        employees: store.employees
    }
}

EmployeeCountComponent = connect(mapPropsFromStore, action)(EmployeeCountComponent)

export default EmployeeCountComponent