const { expect } = require("@jest/globals");
const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a manager object with name, id, email, and office number", () => {
      const manager = new Manager("mike", "1", "a@a.com", "a123");
      expect(manager.name).toEqual("mike");
      expect(manager.id).toEqual("1");
      expect(manager.email).toEqual("a@a.com");
      expect(manager.officeNum).toEqual("a123");
    });
  });
});
