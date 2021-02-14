const Employee = require("../employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("will create an object with a name and age", () => {
      const employee = new Employee("mike", 1, "a@a.com");

      expect(employee.name).toEqual("mike");
      expect(employee.email).toEqual("a@a.com");
    });
  });
});
