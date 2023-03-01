class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}"></${this.shape}>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

module.exports = Shape;