
class Shape{
    constructor( bgColor, fgColor, text){
        this.bgColor = bgColor
        this.fgColor = fgColor
        this.text = text
    }

}

class Circle extends Shape{
    constructor( bgColor, fgColor, text){
        super( bgColor, fgColor, text)
        

    }
    render(){
        return `
        <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${this.bgColor}" stroke = "${this.fgColor}" stroke-width ="1" />
            <text x="20" y="60" font-weight='bold' fill= '${this.fgColor}' font-size='30'>${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape{
    constructor( bgColor, fgColor, text){
        super( bgColor, fgColor, text)
        

    }
    render(){
        return `
        <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:${this.bgColor}; stroke:${this.fgColor}; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= '${this.fgColor}' font-size='30'>${this.text}</text>
        </svg>`
    }
}

class Square extends Shape{
    constructor( bgColor, fgColor, text){
        super( bgColor, fgColor, text)

    }
    render(){
        return `
        <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:${this.bgColor};"/>
            <text x="70" y="150" font-weight='bold' fill= '${this.fgColor}' font-size='30'>${this.text}</text>
        </svg>`
    }
}

export {Square, Circle, Shape, Triangle}