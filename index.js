const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team manager's Employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email address?",
    },
    {
        type: 'input',
        name: 'number',
        message: "What is your team manager's office number?",
    }
];

const EngineerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's Employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?",
    },
];

const InternQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's Employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does your intern attend?",
    },
];

const menuQ = [
    {
        type: 'list',
        name: 'menu',
        choices: ['Engineer', 'Intern', 'Exit'],
        message: 'Choose a member of your team to add.',
    }
];

const addManager = () => {
    inquirer
  .prompt(managerQs)
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
    const role = manager.getRole()
    const managerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
      <p class="card-text">Their Employee ID is ${manager.id} and their office number is ${manager.number}. </p>
      <a href="mailto: ${manager.email}" class="card-link">Email</a>
    </div>
  </div>`
    });
};