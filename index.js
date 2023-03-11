const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var htmlBody = ``;

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
    console.log("----------\nFirst, let's add a team manager!\n----------")
    inquirer
  .prompt(managerQs)
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
    const managerHTML = `
    <div class="card bg-light col-6 col-md-3" style="width: 28rem; margin:10px;">
        <div class="card-body">
            <h5 class="card-title" style="font-size:32px">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted" style="font-size:24px">${manager.getRole()}</h6>
            <p class="card-text" style="font-size:20px">Their Employee ID is ${manager.getId()}. <br> Their office number is ${manager.number}. </p>
            <a href="mailto: ${manager.getEmail()}" class="card-link" style="font-size:20px">Email</a>
        </div>
    </div>`;
    htmlBody += managerHTML;
    mainMenu();
    });
};

const addEngineer = () => {
    console.log("----------\nLet's add an engineer!\n----------")
    inquirer
  .prompt(EngineerQs)
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    const engineerHTML = `
    <div class="card bg-light col-6 col-md-3" style="width: 28rem; margin:10px;">
        <div class="card-body">
            <h5 class="card-title" style="font-size:32px">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted" style="font-size:24px">${engineer.getRole()}</h6>
            <p class="card-text" style="font-size:20px">Their Employee ID is ${engineer.getId()}. </p>
            <a href="mailto: ${engineer.getEmail()}" class="card-link" style="font-size:20px">Email</a>
            <a href="${engineer.getGithub()}" class="card-link" style="font-size:20px">GitHub</a>
        </div>
    </div>`;
    htmlBody += engineerHTML;
    mainMenu();
    });
};

const addIntern = () => {
    console.log("----------\nLet's add an intern!\n----------")
    inquirer
  .prompt(InternQs)
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    const internHTML =`
    <div class="card bg-light col-6 col-md-3" style="width: 28rem; margin:10px;">
        <div class="card-body">
            <h5 class="card-title" style="font-size:32px">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted" style="font-size:24px">${intern.getRole()}</h6>
            <p class="card-text" style="font-size:20px">Their Employee ID is ${intern.getId()}. <br> They go to ${intern.getSchool()}. </p>
            <a href="mailto: ${intern.getEmail()}" class="card-link" style="font-size:20px">Email</a>
        </div>
    </div>`;
    htmlBody += internHTML;
    mainMenu();
    });
};

const mainMenu = () => {
    console.log("----------\n")
    inquirer
    .prompt(menuQ)
    .then((answers) => {
        switch (answers.menu) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                createHTML(htmlBody);
        }
    });
};

const createHTML = (htmlBody) => {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header class="container-fluid text-center" style="margin-bottom: 20px;">
            <h1 style="font-size:5vw">My Team</h1>
        </header>
        <div class="container justify-content-center">   
            <div class="row justify-content-center"> 
                ${htmlBody}
        
            </div>
        </div> 
    </body>
    </html>`;
    writeToFile("./dist/index.html", htmlContent);
};

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created HTML! Launch the index.html file in the dist folder to view.')
    );
};

const init = () => {
    console.log("----------\nWelcome to the Team Profile Generator! Add your team members here to create your website.")
    addManager();
};

init();