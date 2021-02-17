const { expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an engineer object with name, id, email, and school", () => {
      const engineer = new Engineer("Gary", "2", "c@a.com", "garytime");
      expect(engineer.name).toEqual("Gary");
      expect(engineer.id).toEqual("2");
      expect(engineer.email).toEqual("c@a.com");
      expect(engineer.github).toEqual("garytime");
    });
  });
});
