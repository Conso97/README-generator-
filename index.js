// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "Write the installation instructions of your project?: ",
},
{
    type: "input",
    name: "usage",
    message: "What is this project used for?"
},
{
    type: "list",
    name: "license",
    message: "What license will you be using: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "None"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "What test are performed on this project?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "What is your github username? "
},
{
    type: "input",
    name: "email",
    message: "What is your email? "
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const data = generateMarkdown(answers);
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Pass")
    );
}

// TODO: Create a function to initialize app
function init () {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const fileName = path.join(__dirname, "README.md");
        writeToFile(fileName, answers);
    })
}
// Function call to initialize app
init();
