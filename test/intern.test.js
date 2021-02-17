const { expect } = require("@jest/globals");
const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an intern object with name, id, email, and school", () => {
      const intern = new Intern("dale", "14", "b@a.com", "Michigan State");
      expect(intern.name).toEqual("dale");
      expect(intern.id).toEqual("14");
      expect(intern.email).toEqual("b@a.com");
      expect(intern.school).toEqual("Michigan State");
    });
  });
});
