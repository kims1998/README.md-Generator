const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./Utils/generateReadMe.js")
const writeFileAsync = util.promisify(fs.writeFile);


function userPrompt(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What would uou like the title of your project to be?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a brief description of what your project is about: ",
            name: "description",
        },
        {
            type: "input",
            message: "Describe the installation process if any: ",
            name: "installation",
        },
        {
            type: "input",
            message: "What is this project usage for?",
            name: "usage",
        },
        {
            type: "list",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ],
            name: "license",
        },
        {
            type: "input",
            message: "Were there any other contributors? If so, please include them here:",
            name: "contributors",
        },
        {
            type: "input",
            message: "Is there a test included?",
            name: "test",
        },
        {
            type: "input",
            message: "What should the user do if they have issues?",
            name: "questions",
        },
        {
            type: "input",
            message: "Please enter your GitHub username: ",
            name: "gitHub",
        },
        {
            type: "input",
            message: "Please enter your email address: ",
            name: "email",
        },
    ]);
};

  async function init() {
    try {
        const results = await userPrompt();
        const generateContent = generateReadMe(results);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Your README.md has been successfully generated!');
    }   catch(err) {
        console.log(err, "an error has occurred while creating your README.md File.");
    };
  };
  
  init();  