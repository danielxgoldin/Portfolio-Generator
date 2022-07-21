// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// Questions needed for user input //
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please Provide A Title. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Name Your Project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please Provide Your Github Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('GitHub Credentials!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Provide your Email. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please Enter Your Email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'Describe the Project and What it Solves? (Required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please Provide a Project Description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'What was the Motivation for Creating this? (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please Provide your Reason for Creating this!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How Will Someone put this to Use? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please provide how someone will use this!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation Requirements (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please Enter your Installation Instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you prefer for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other people to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please Provide if you allow contributers. (Required)',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on using and accessing this application. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    }
];

// function to create the readme file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function to make the application work 
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})