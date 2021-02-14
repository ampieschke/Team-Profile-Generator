const inquirer = require("inquirer");

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
