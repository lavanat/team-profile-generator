const Manager = require("../lib/Manager");
const goodManager = new Manager("Bob", "122", "bob@gmail.com", "234-345-3344");
const badManager = new Manager();

describe("Manager", () => {
    describe("Are they a manager?", () => {
        it("should return true if they were constructed using the manager class", () => {
            expect(goodManager).toBeInstanceOf(Manager);
            expect(badManager).toBeInstanceOf(Manager);
        });
    });
    describe("Do they have the properties of an employee?", () => {
        it("should return true if they have a name.", () => {
            expect(goodManager.getName()).toEqual("Bob");
        });
        it("should return true if they have an id.", () => {
            expect(goodManager.getId()).toEqual("122");
        });
        it("should return true if they have an email.", () => {
            expect(goodManager.getEmail()).toEqual("bob@gmail.com");
        });
        it("should return false if they do not have a name.", () => {
            expect(badManager.getName()).not.toBeDefined();
        });
        it("should return false if they do not have an id.", () => {
            expect(badManager.getId()).not.toBeDefined();
        });
        it("should return false if they do not have an email.", () => {
            expect(badManager.getEmail()).not.toBeDefined();
        });
    })
    describe("Do they have the properties of a manager?", () => {
        it("should return true if they have a Manager role.", () => {
            expect(goodManager.getRole()).toEqual("Manager");
            expect(badManager.getRole()).toEqual("Manager");
        });
        it("should return true if they have an office number.", () => {
            expect(goodManager.getNumber()).toEqual("234-345-3344");
        });
        it("should return false if they do not have an office number.", () => {
            expect(badManager.getNumber()).not.toBeDefined();
        });
    });
});