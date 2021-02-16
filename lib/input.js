const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const Manager = require("./manager");

class Entry {
  promptUser = () =>
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "What is your role here?",
          choices: ["Employee", "Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is your Employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your Email?",
        },
      ])
      .then((answers) => {
        if (answers.role === "Manager") {
          console.log("im mr manager!");
          managerPrompt = () =>
            inquirer.prompt([
              {
                type: "input",
                name: "name",
                message: "What is your name?",
              },
              {
                type: "input",
                name: "id",
                message: "What is your Employee ID?",
              },
              {
                type: "input",
                name: "email",
                message: "What is your Email?",
              },
            ]);
        }
      });
}

module.exports = Entry;
