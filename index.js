const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlBody = ``;

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
    const managerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
            <p class="card-text">Their Employee ID is ${manager.getId()} and their office number is ${manager.number}. </p>
            <a href="mailto: ${manager.getEmail()}" class="card-link">Email</a>
        </div>
    </div>`;
    htmlBody += managerHTML;
    mainMenu();
    });
};

const addEngineer = () => {
    inquirer
  .prompt(EngineerQs)
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    const engineerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
            <p class="card-text">Their Employee ID is ${engineer.getId()}. </p>
            <a href="mailto: ${engineer.getEmail()}" class="card-link">Email</a>
            <a href="${engineer.getGithub()}" class="card-link">GitHub</a>
        </div>
    </div>`;
    htmlBody += engineerHTML;
    mainMenu();
    });
};

const addIntern = () => {
    inquirer
  .prompt(InternQs)
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    const internHTML =`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
            <p class="card-text">Their Employee ID is ${intern.getId()} and they go to ${intern.getSchool()}. </p>
            <a href="mailto: ${intern.getEmail()}" class="card-link">Email</a>
        </div>
    </div>`;
    htmlBody += internHTML;
    mainMenu();
    });
};

const mainMenu = () => {
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
}

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
        <header>
            <h1>My Team</h1>
        </header>
        ${htmlBody}
    </body>
    </html>`;
    writeToFile("./dist/index.html", htmlContent);
}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created HTML! Launch the index.html file in the dist folder to view.')
    );
}