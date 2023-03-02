const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter up to 3 characters for your logo text.',
        name:'text',
        validate: (value) => { 
            if ((value) && (value.length <= 3)) { 
                return true; 
            } else { 
                return "Let's keep it to 3 characters or less please :)";
            }
        },
    },
    {
        type: 'input',
        message: 'Please enter a color for your text.',
        name: 'textColor',
        validate: (value) => { 
            if (value) { 
                return true;
            } else { 
                return 'Please input a color.';
            } 
        },
    },
    {
        type:'list',
        message: 'Please select a shape for your logo.',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        messgae: 'Please enter a color for your shape.',
        name: 'shapeColor',
        validate: (value) => { 
            if (value) { 
                return true 
            } else { 
                return 'Please input a color.' } },
    },
]).then(newSVG);

const newSVG = (data) => {
    let newShape;
    if(data.shape === 'circle') {
        newShape = new Circle(
            data.text,
            data.textColor,
            data.shape,
            data.shapeColor
        )
    } else if (data.shape === 'square') {
        newShape = new Square(
            data.text,
            data.textColor,
            data.shape,
            data.shapeColor
        )
    } else {
        newShape = new Triangle(
            data.text,
            data.textColor,
            data.shape,
            data.shapeColor
        )
    }
    fs.writeFile('./examples/logo.svg', newShape.render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
    })
}