const Employee = require("../lib/Employee");
const goodEmployee = new Employee("Bob", "122", "bob@gmail.com");
const badEmployee = new Employee();

describe("Employee", () => {
    describe("Are they an Employee?", () => {
        it("should return true if they were constructed using the employee class", () => {
            expect(goodEmployee).toBeInstanceOf(Employee);
            expect(badEmployee).toBeInstanceOf(Employee);
        });
    });
    describe("Do they have the properties of an employee?", () => {
        it("should return true if they have a name.", () => {
            expect(goodEmployee.getName()).toEqual("Bob");
        });
        it("should return true if they have an id.", () => {
            expect(goodEmployee.getId()).toEqual("122");
        });
        it("should return true if they have an email.", () => {
            expect(goodEmployee.getEmail()).toEqual("bob@gmail.com");
        });
        it("should return false if they do not have a name.", () => {
            expect(badEmployee.getName()).not.toBeDefined();
        });
        it("should return false if they do not have an id.", () => {
            expect(badEmployee.getId()).not.toBeDefined();
        });
        it("should return false if they do not have an email.", () => {
            expect(badEmployee.getEmail()).not.toBeDefined();
        });
    })
});