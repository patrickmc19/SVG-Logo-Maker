const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Shape = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter up to 3 characters for your logo text.',
        name:'text',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'Please enter a color for your text.',
        name: 'textColor',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type:'list',
        message: 'Please select a shape for your logo.',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
        validate: (value) => { if (value) { return true } else { return 'Please select something to continue.' } },
    },
    {
        type: 'input',
        messgae: 'Please enter a color for your shape.',
        name: 'shapeColor',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
])
    .then((answers) => {
        // const logoDetails = svgFile(answers);
        createNewFile('./examples/logo.svg', logoDetails)
    })

function createNewFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg')
    })
}