// const Employee = require("./employee");
// const Entry = require("./input");

// class Manager extends Employee {
//   constructor(officeNumber) {
//     super(id, email, role);
//     this.officeNumber = officeNumber;
//     this.role = "Manager";
//   }
//   getofficeNumber() {
//     console.log(this.officeNumber);
//     return this.officeNumber;
//   }
// }

managerPrompt = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);

// // const manager = new Manager(5);

// console.log("**Manager**");
// manager.printInfo();
// manager.getofficeNumber();

// module.exports = Manager;
