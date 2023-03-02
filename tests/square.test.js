const Square = require("../lib/square");
const square = new Square("yes", "white", "square", "black");

describe("Square", () => {
    describe("Properties of a square", () => {
        it ("text", () => {
            expect(square.text).toEqual("yes");
        })
        it ("textColor", () => {
            expect(square.textColor).toEqual("white");
        })
        it ("shape", () => {
            expect(square.shape).toEqual("square");
        })
        it ("shapeColor", () => {
            expect(square.shapeColor).toEqual("black");
        })
    })
    describe("Render of a square", () => {
        it ("render", () => {
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="10" y="10" width="180" height="180" fill="black"></rect>
        <text x="100" y="110" font-size="60" text-anchor="middle" fill="white">yes</text>
    </svg>`)
        })
    })
})