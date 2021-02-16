class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    if (typeof this.name !== "string") {
      throw new Error("expected 'name' to be a non empty string");
    }
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }

  printInfo() {
    console.log(`Hello ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`email: ${this.email}`);
    console.log(`${this.role}`);
  }
}

// generateHTML();

module.exports = Employee;
