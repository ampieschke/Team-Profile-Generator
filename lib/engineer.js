// const fs = require("fs");
const Employee = require("./employee");
// const Manager = require("./manager");

class Engineer extends Employee {
  constructor(person_name, id, email, github) {
    super(person_name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
