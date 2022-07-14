import React from 'react';

import { connect } from "react-redux";

class EmployeeCountComponent extends React.Component {

    render() {
        debugger;
        return (
            <>
                <h1>Employee Count is Given Below {this.props.employees.length}</h1><hr/>
            </>
        )
    }
}

function mapPropsFromStore(store) {
    return {
        employees: store.employees
    }
}

EmployeeCountComponent = connect(mapPropsFromStore, null)(EmployeeCountComponent)

export default EmployeeCountComponent