// JavaScript is not Object Oriented

// Protypical Chaining

class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        console.log(this.name)
    }

    getAge() {
        console.log(this.age)
    }
}

var employeeOne = new Employee("A", 10)
var employeeTwo = new Employee("B", 100)

debugger;

employeeOne.getAge()
employeeTwo.getAge()
