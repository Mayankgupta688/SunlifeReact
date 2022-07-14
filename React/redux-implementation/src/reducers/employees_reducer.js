export default function employees_reducer(employeeStore = [], action) {
    debugger;
    if(action.type === "Add Employee List") {
        return [...action.data]
    }

    if(action.type === "Delete Employee List") {
        return [];
    }

    if(action.type === "Delete Employee Specific") {
        var filterList = employeeStore.filter((employee) => {
            return employee.id !== action.payload
        })

        return filterList;
    }

    return employeeStore;
}