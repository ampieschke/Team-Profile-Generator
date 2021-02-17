const Employee = require("../lib/employee");

describe("Employee", () => {
  it("will create an object with a name and age", () => {
    const employee = new Employee("mike", "1", "a@a.com");
    expect(employee.name).toEqual("mike");
    expect(employee.id).toEqual("1");
    expect(employee.email).toEqual("a@a.com");
  });
});
