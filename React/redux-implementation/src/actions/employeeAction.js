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