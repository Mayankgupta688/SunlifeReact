import Axios from "axios";

export function addEmployeeList(employeeList) {
    debugger;
    return {
        type: "Add Employee List",
        data: employeeList,
        sampleData: 1
    }
}

export function deleteAllEmployee() {
    return {
        type: "Delete Employee List"
    }
}

export function deleteSpecificEmployee(employeeId) {
    return {
        type: "Delete Employee Specific",
        payload: employeeId
    }
}

export function loadEmployeeData() {
    return function(dispatch) {
        return Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            dispatch(addEmployeeList(response.data))
        })
    }
}