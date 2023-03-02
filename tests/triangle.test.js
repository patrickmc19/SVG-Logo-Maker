const Triangle = require("../lib/triangle");
const triangle = new Triangle("bed", "black", "triangle", "red");

describe("Triangle", () => {
    describe("Properties of a triangle", () => {
        it ("text", () => {
            expect(triangle.text).toEqual("bed");
        })
        it ("textColor", () => {
            expect(triangle.textColor).toEqual("black");
        })
        it ("shape", () => {
            expect(triangle.shape).toEqual("triangle");
        })
        it ("shapeColor", () => {
            expect(triangle.shapeColor).toEqual("red");
        })
    })
    describe("render of a triangle", () => {
        it ("render", () => {
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="red"></polygon>
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="black">bed</text>
    </svg>`)
        })
    })
})