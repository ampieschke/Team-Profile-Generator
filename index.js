const inquirer = require("inquirer");
const { Employee, Manager, Engineer } = require("./lib");

const entry = new Entry();

const promptUser = (list) => {
  let list_of_users = list || [];
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
        name: "github",
        message: "What is their github user name?",
        when: (answers) => answers.role == "Engineer",
      },
      {
        type: "input",
        name: "github",
        message: "What is their github user name?",
        when: (answers) => answers.role == "Engineer",
      },
      {
        type: "input",
        name: "github",
        message: "What is their github user name?",
        when: (answers) => answers.role == "Engineer",
      },
    ])
    .then((answers) => {
      let new_emp;
      if (answers.role === "Manager") {
        new_emp = new Manager(...answers);
        console.log("I'm mr manager!");
      } else if (answers.role === "Engineer") {
        new_emp = new Engineer(...answers);
        console.log("Engineer Reporting!");
      } else if (answers.role === "Intern") {
        console.log("Intern here.");
      }

      list_of_users.push(new_emp);

      inquirer
        .prompt([
          {
            type: "confirm",
            message: "Do you want to continue",
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
        });
    });
};
