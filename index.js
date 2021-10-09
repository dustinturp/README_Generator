// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptReadMe = () => {
return inquirer.prompt([ 

    //reorder to match acceptance criteria
    // add validation for each question look into trim for text entry
    //add email double check acceptance criteria
    // email validation package
    //validate links submitted
    {
        //git hub user name insert into a link. 
        type: 'input',
        name: 'gitHubUsername',
        message: 'Enter Git Hub Username',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        // header
        type: 'input',
        name: 'title',
        message: 'Project Name',
        validate: prjInput => {
            if (prjInput) {
              return true;
            } else {
              console.log('Please enter a project name! ');
              return false;
            }
          }
    },
    {// license predefined options for common licenses.
        type: 'checkbox',
        name: 'licenseOptions',
        message: 'Choose a license option',
        choices: ['Apache','BSD','MIT', 'None']
    },
    
    {
        // description
        type: 'input',
        name: 'description',
        message: 'Enter Description of the repo',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Installation Instructions',
        //  others
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Usage Information',
        // other
    },
    {
        type: 'input',
        name: 'licenseInfo',
        message: 'Enter a description of the license',
        // other
    },
    {
        type: 'input',
        name: 'licenseLinkInfo',
        message: 'Enter the license link',
        // other
    },

    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution Guidelines',
        //  others
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Test Instructions',
        //  others
    },


 ])
};

// TODO: Create a function to write README file fs
function writeToFile(fileName, data) {
    //sync wait till its done
    return fs.writeFileSync('./README.md', data)
}

// TODO: Create a function to initialize app
function init() {
    promptReadMe()
    .then(data => {
    // console.log("hello from index.js")
    // console.log(data)
    writeToFile("", generateMarkdown(data))
    console.log('All Done! Check Directory**** for the readme file.');
})
}

// Function call to initialize app
init();   // node start point pull in other files



