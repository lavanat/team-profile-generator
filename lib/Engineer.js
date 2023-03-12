const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {return "Engineer";}

  getGithub() {
    if (this.github !== undefined) {
      return `https://github.com/${this.github}`;
    }};
};

module.exports = Engineer;