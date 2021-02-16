const inquirer = require("inquirer");
// const fs = require("fs");
// const Employee = require("./employee");
// const Manager = require("./manager");

class Entry {
  promptUser = () => {
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
          name: "name",
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
      ])

      // const job = answers.role;
      // switch (job) {
      //   case "Manager":
      //     inquirer.prompt([
      //       {
      //         type: "input",
      //         name: "roomNumb",
      //         message: "What is their room number?",
      //       },
      //     ]);
      //     break;
      //   default:
      //     prompts.complete;
      // }
      .then((answers) => {
        if (answers.role === "Manager") {
          console.log("I'm mr manager!");
          managerPrompt = () => {
            inquirer.prompt([
              {
                type: "input",
                name: "name",
                message: "What is your office number?",
              },
            ]);
          };
        } else if (answers.role === "Engineer") {
          console.log("Engineer Reporting!");
        } else if (answers.role === "Intern") {
          console.log("Intern here.");
        }
      });
  };
}

module.exports = Entry;
