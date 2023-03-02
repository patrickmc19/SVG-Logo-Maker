const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon>
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

module.exports = Triangle;