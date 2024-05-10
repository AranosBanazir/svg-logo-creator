import { Square, Circle, Shape, Triangle } from "./lib/shapes.js";
import fs from 'fs/promises'
import inquirer from "inquirer";

let shape;

const buildQuestions = [
{
    name: 'bgColor',
    type: 'input',
    message: 'Pick a background color:',
    prefix: '',
},
{
    name: 'fgColor',
    type: 'input',
    message: 'Pick a text color:',
    prefix: '',
},
{
    name: 'text',
    type: 'input',
    message: 'Logo text (must be 3 characters or less):',
    validate: i => i.length > 3 ? false : true,
    prefix: '',
},
{
    name: 'shapeType',
    type: 'list',
    message: 'Pick a type of shape:',
    choices: ['Circle', 'Square', 'Triangle'],
    prefix:'',
},
{
    name: 'svgFileName',
    type: 'input',
    validate: i => i.length < 3 ? false : true,
    message: 'Name your SVG file (must be more than 3 characters):',
    prefix: '',
}
]

function init(){
    inquirer.prompt(buildQuestions)
        .then((a)=>{
            switch (a.shapeType) {
                case 'Circle':
                    shape = new Circle(a.bgColor, a.fgColor, a.text)
                    makeSVG(shape, a.svgFileName)
                    break;
                case 'Square':
                    shape = new Square(a.bgColor, a.fgColor, a.text)
                    makeSVG(shape, a.svgFileName)
                    break;
                case 'Triangle':
                    
                    shape = new Triangle(a.bgColor, a.fgColor, a.text)
                    makeSVG(shape, a.svgFileName)
                    break;
                default:
                    break;
            }
        })
}


async function makeSVG(shape, filename){
    await fs.writeFile(`./examples/${filename}.svg`, shape.render())
    console.log(`Your SVG Logo "${filename}.svg" was created successfully!`)
}

init()