import { write } from "fs";
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
    message: 'Logo text:',
    prefix: '',
},
{
    name: 'shapeType',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle'],
    prefix:'',
},
{
    name: 'svgFileName',
    type: 'input',
    message: 'Name your SVG file:',
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
    await fs.writeFile(`./${filename}.svg`, shape.render())
    console.log(`Your SVG Logo "${filename}.svg" was created successfully!`)
}

init()