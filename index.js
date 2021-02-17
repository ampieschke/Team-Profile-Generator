const inquirer = require("inquirer");
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
        name: "github",
        message: "What is their github user name?",
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
      if (answers.role == "Manager") {
        new_emp = new Manager(...answers);
        console.log("I'm mr manager!");
      } else if (answers.role == "Engineer") {
        new_emp = new Engineer(...answers);
        console.log("Engineer Reporting!");
      } else if (answers.role == "Intern") {
        new_emp = new Intern(...answers);
        console.log("Intern here.");
      }

      list_of_users.push(new_emp);
      console.log(list_of_users);

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
promptUser();
//   .then((answers) => writeFileAsync("index.html", generateHTML(answers)))
//   .then(() => console.log("Successfully wrote to index.html"))
//   .catch((err) => console.error(err));
