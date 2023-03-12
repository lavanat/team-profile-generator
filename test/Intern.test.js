const Intern = require("../lib/Intern");
const goodIntern = new Intern("Bob", "122", "bob@gmail.com", "Georgia Tech");
const badIntern = new Intern();

describe("Intern", () => {
    describe("Are they an Intern?", () => {
        it("should return true if they were constructed using the intern class", () => {
            expect(goodIntern).toBeInstanceOf(Intern);
            expect(badIntern).toBeInstanceOf(Intern);
        });
    });
    describe("Do they have the properties of an employee?", () => {
        it("should return true if they have a name.", () => {
            expect(goodIntern.getName()).toEqual("Bob");
        });
        it("should return true if they have an id.", () => {
            expect(goodIntern.getId()).toEqual("122");
        });
        it("should return true if they have an email.", () => {
            expect(goodIntern.getEmail()).toEqual("bob@gmail.com");
        });
        it("should return false if they do not have a name.", () => {
            expect(badIntern.getName()).not.toBeDefined();
        });
        it("should return false if they do not have an id.", () => {
            expect(badIntern.getId()).not.toBeDefined();
        });
        it("should return false if they do not have an email.", () => {
            expect(badIntern.getEmail()).not.toBeDefined();
        });
    })
    describe("Do they have the properties of an intern?", () => {
        it("should return true if they have an Intern role.", () => {
            expect(goodIntern.getRole()).toEqual("Intern");
            expect(badIntern.getRole()).toEqual("Intern");
        });
        it("should return true if they go to school.", () => {
            expect(goodIntern.getSchool()).toEqual("Georgia Tech");
        });
        it("should return false if they do not go to school.", () => {
            expect(badIntern.getSchool()).not.toBeDefined();
        });
    });
});