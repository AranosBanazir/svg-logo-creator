import { Circle } from "./shapes"

describe('Making a circle', ()=>{
    test('Making a Triangle with the text hi, and the bg color blue', ()=>{
        const shape = new Triangle();
        shape.bgColor = "blue"
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})