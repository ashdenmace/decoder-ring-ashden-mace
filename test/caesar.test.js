// Write your tests here!
const {expect} = require("chai")
const { caesar } = require("../src/caesar")
describe("----Caesar Function Tests Written by Ashden Mace----", () => {
    describe("Error Handling", () => {
        it("Should return false if shift is greater than 25", () => {
            const actual = caesar("javascript", 27)
            expect(actual).to.be.false
        })
        it ("Should return false if shift is less than -25", () => {
            const actual = caesar("javascript", -26)
            expect(actual).to.be.false
        })
    })
    describe("Encoding", () => {
        it("Should encode a message by the given shift", () => {
            const expected = "ofafxhwnuy"
            const actual = caesar("javascript", 5)
            expect(actual).to.equal(expected)
        })
        it("Should encode a message with spaces and nonalphabetic characters in place", () => {
            const expected = "-zqlqishyfj yi q bej ev vkd-"
            const actual = caesar("-javascript is a lot of fun-", 16)
            expect(actual).to.equal(expected)
        })
    
        it("Should allow a negative shift", () => {
            const expected = "czggj rjmgy"
            const actual = caesar("Hello World", -5)
            expect(actual).to.equal(expected)
        })
    })
    
    
    describe("Decoding", () => {
        it("Should decode a message given the shift", () => {
            const expected = "javascript"
            const actual = caesar("zqlqishyfj", 16, false)
            expect(actual).to.equal(expected)
        })
    
        it("Should decode a message with spaces and nonalphabetic characters in place", () => {
            const expected = "hello world!"
            const actual = caesar("olssv dvysk!", 7, false)
            expect(actual).to.equal(expected)
        })
    
        it("Should decode and handle letters off the alphabet", () => {
            const expected = "caesar shift"
            const actual = caesar("ywaown odebp", -5, false)
        })

        it("Should allow a negative shift", () => {
            const expected = "hello world"
            const actual = caesar("czggj rjmgy", -5, false)
            expect(actual).to.equal(expected)
        })
    })


})