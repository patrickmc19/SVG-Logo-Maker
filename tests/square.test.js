const Circle = require("../lib/circle");
const circle = new Circle("end", "red", "circle", "black");

describe("Circle", () => {
    describe("Properties of a circle", () => {
        it ("text", () => {
            expect(circle.text).toEqual("end");
        })
        it ("textColor", () => {
            expect(circle.textColor).toEqual("red");
        })
        it ("shape", () => {
            expect(circle.shape).toEqual("circle");
        })
        it ("shapeColor", () => {
            expect(circle.shapeColor).toEqual("black");
        })
    })
    describe("render of a circle", () => {
        it ("render", () => {
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="black"></circle>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">end</text>
    </svg>`)
        })
    })
})