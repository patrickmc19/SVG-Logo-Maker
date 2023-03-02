const Shape = require("../lib/shapes");
const shape = new Shape ("bad", "blue", ["square", "circle", "triangle"], "black");

describe("Square", () => {
    describe("Properties of a shape", () => {
        it ("text", () => {
            expect(shape.text).toEqual("bad");
        })
        it ("textColor", () => {
            expect(shape.textColor).toEqual("blue");
        })
        it ("shape", () => {
            expect(shape.shape).toEqual(["square", "circle", "triangle"]);
        })
        it ("shapeColor", () => {
            expect(shape.shapeColor).toEqual("black");
        })
    })
})