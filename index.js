// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required): ',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title! ')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required): ',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!: ')
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions if applicable: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter instructions for usage (Required): ',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions for your project! ')
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If project allows for contributors, enter instructions for how to do so: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your project? ',
            choices: ['MIT', 'Unlicense', 'Apache 2.0', 'GPLv3', 'BSD 3', 'Mozilla Public License 2.0', 'CDDL-1.0']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter instructions for testing: '
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter GitHub username (Required): ',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username! ')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'If you want to be available for contact, enter your email address: '
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return writeFileAsync(fileName, data)

/*     fs.writeFile(fileName, data, function(err) {

        if (err) {
            return console.log(err)
        }
    
        console.log('done')
    }) */
}

// TODO: Create a function to initialize app
const init = async () => {
    try {

        // ask user questions
        const responses = await questionsPrompt()

        //create markdown
        const readMeContent = generateMarkdown(responses)

        //write to markdown
        await writeToFile('./demo/README.md', readMeContent)

        console.log("ReadMe.md has been created in the demo folder")

    } catch (err) {
        console.log('Sorry there was an error created the readme')
        console.log(err)
    } 
}

// Function call to initialize app
init();
//questionsPrompt();