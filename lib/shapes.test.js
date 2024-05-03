import { Circle, Triangle, Square, Shape } from "./shapes"

describe('Making a Triangle', ()=>{
    test('Making a Triangle with the bg color blue, the text "WOW" and the fgColor pink', ()=>{
        const shape = new Triangle();
        shape.bgColor = "blue"
        shape.fgColor = "pink"
        shape.text    = "WOW"

        expect(shape.render()).toEqual(`
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:blue; stroke:pink; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= 'pink' font-size='30'>WOW</text>
        </svg>`);
    })
})

describe('Making a Circle', ()=>{
    test('Making a Circle with the bg color red, the text "CTS" and the fgColor green', ()=>{
        const shape = new Circle();
        shape.bgColor = "red"
        shape.fgColor = "green"
        shape.text    = "CTS"

        expect(shape.render()).toEqual(`
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="red" stroke = "green" stroke-width ="1" />
            <text x="20" y="60" font-weight='bold' fill= 'green' font-size='30'>CTS</text>
        </svg>`);
    })
})

describe('Making a Square', ()=>{
    test('Making a Square with the bg color black, the text "BCS" and the fgColor white', ()=>{
        const shape = new Square();
        shape.bgColor = "black"
        shape.fgColor = "white"
        shape.text    = "BCS"

        expect(shape.render()).toEqual(`
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="10" y="10" style="fill:black;stroke-width:1;stroke:white" />
            <text x="50" y="100" font-weight='bold' fill= 'white' font-size='30'>BCS</text>
        </svg>`);
    })
})