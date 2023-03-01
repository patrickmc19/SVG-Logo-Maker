const Shape = require("./shapes")

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}

module.exports = Circle;