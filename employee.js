
var inquirer = require('inquirer');
const fs = require("fs");


class Employee{
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
        if (typeof this.name !== 'string'){
            throw new Error("expected 'name' to be a non empty string")
            }   
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
}

const manager = new Employee("Carl", "111", "carl@netscape.net")





generateHTML(){
    console.log(`Hello ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`email: ${this.email}`)
}
