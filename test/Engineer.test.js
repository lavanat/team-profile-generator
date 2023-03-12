const Engineer = require("../lib/Engineer");
const goodEngineer = new Engineer("Bob", "122", "bob@gmail.com", "bobasaurus");
const badEngineer = new Engineer();

describe("Engineer", () => {
    describe("Are they an Engineer?", () => {
        it("should return true if they were constructed using the engineer class", () => {
            expect(goodEngineer).toBeInstanceOf(Engineer);
            expect(badEngineer).toBeInstanceOf(Engineer);
        });
    });
    describe("Do they have the properties of an employee?", () => {
        it("should return true if they have a name.", () => {
            expect(goodEngineer.getName()).toEqual("Bob");
        });
        it("should return true if they have an id.", () => {
            expect(goodEngineer.getId()).toEqual("122");
        });
        it("should return true if they have an email.", () => {
            expect(goodEngineer.getEmail()).toEqual("bob@gmail.com");
        });
        it("should return false if they do not have a name.", () => {
            expect(badEngineer.getName()).not.toBeDefined();
        });
        it("should return false if they do not have an id.", () => {
            expect(badEngineer.getId()).not.toBeDefined();
        });
        it("should return false if they do not have an email.", () => {
            expect(badEngineer.getEmail()).not.toBeDefined();
        });
    })
    describe("Do they have the properties of an engineer?", () => {
        it("should return true if they have a Engineer role.", () => {
            expect(goodEngineer.getRole()).toEqual("Engineer");
            expect(badEngineer.getRole()).toEqual("Engineer");
        });
        it("should return true if they have a GitHub.", () => {
            expect(goodEngineer.getGithub()).toEqual("https://github.com/bobasaurus");
        });
        it("should return false if they do not have a GitHub.", () => {
            expect(badEngineer.getGithub()).not.toBeDefined();
        });
    });
});