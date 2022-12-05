const inquirer = require('inquirer');
const fs = require('fs');
const markdownTemplate = require('./utils/generateMarkdown.js');

// README Generator that prompts users for Username, Title, Description, Email, Contributing, 
// Installation, Usage, License

inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of repo?'
        },
        
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of the repo.'
        },
        {
            type: 'input',
            name: 'email',
            message:'Provide your email address.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to the repo?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how repo will be used.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['Apache2.0', 'BSD', 'MIT', 'none']
        },
        
    
    ])
    .then((data) =>{
        console.log(data);
        fs.writeFile('README.md', markdownTemplate(data), ((err) => {
            if(err) {
                console.log(err);
            } else return
        }));
    })
