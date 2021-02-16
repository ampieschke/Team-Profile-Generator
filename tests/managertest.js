// const Manager = require("../manager");

// describe("Manager", () => {
//   describe("Initialization", () => {
//     it("should create an object with a name and age", () => {
//       const manager = new Manager("mike");
//     });
//   });
// });

// describe("getOfficeNumber", () => {
//   it("should run the function get office number", () => {
//     const manager = new Manager("Mike", 1, "a@a.com", "a123");

//     const managerSpy = jest.spyOn(manager, "getOfficeNumer");
//     manager.getOfficeNumer();
//     expect(managerSpy).toBeCalled();

//     managerSpy.mockImplementation(() => {
//       return "a123";
//     });

//     expect(managerSpy()).toEqual("a123");
//   });
// });
