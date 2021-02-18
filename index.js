const inquirer = require("inquirer");
const fs = require("fs");
const { Employee, Manager, Engineer, Intern } = require("./lib");

// const entry = new Entry();

const promptUser = (list_of_users = []) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employees role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "person_name",
        message: "What is their name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is their Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their Email?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is their office number?",
        when: (answers) => answers.role == "Manager",
      },
      {
        type: "input",
        name: "github",
        message: "What is their github user name?",
        when: (answers) => answers.role == "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is their school?",
        when: (answers) => answers.role == "Intern",
      },
    ])
    .then((answers) => {
      let new_emp;

      switch (answers.role) {
        case "Manager":
          new_emp = new Manager(...Object.entries(answers));
          console.log("I'm mr manager!");
          break;
        case "Engineer":
          new_emp = new Engineer(...Object.entries(answers));
          console.log("Engineer Reporting!");
          break;
        case "Intern":
          new_emp = new Intern(...Object.entries(answers));
          console.log("Intern here.");
        default:
          console.log("cool cool cool");
      }

      list_of_users.push(new_emp);
      console.log(list_of_users);

      inquirer
        .prompt([
          {
            type: "confirm",
            message: "Do you want to add more employees?",
            name: "continue",
          },
        ])
        .then((res) => {
          if (res.continue) {
            promptUser(list_of_users);
          } else {
            // Make the page
            console.log("Done");
          }
        })
        .catch((err) => console.error(err));
    });
};
promptUser();
