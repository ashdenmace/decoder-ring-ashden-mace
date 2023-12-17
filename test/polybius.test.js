// Write your tests here!
const {expect} = require("chai")
const { polybius } = require("../src/polybius")
describe("----Polybius Function Tests Written by Ashden Mace----", () => {
    describe("Encoding", () => {
        it("should encode a single word", () => {
            const expected = "3251131343"
            const actual = polybius("hello")
            expect(actual).to.equal(expected)
        })
        it("should encode a message with spaces", () => {
            const expected = "3251131343 2543241341"
            const actual = polybius("Hello World")
            expect(actual).to.equal(expected)
        })
    
        it("should encode characters 'i' and 'j' as 42", () => {
            const expected = "42 42"
            const actual = polybius("i j")
            expect(actual).to.equal(expected)
        })
    })
    
    describe("Encoding", () => {
        it("should decode 42 to (i/j)", () => {
            const expected = "test(i/j)ng"
            const actual = polybius("44513444423322", false)
            expect(actual).to.equal(expected)
        })
    
        it("should decode a single word", () => {
            const expected = "apple"
            const actual = polybius("1153531351", false)
            expect(actual).to.equal(expected)
        })
    
        it("should decode a message with spaces", () => {
            const expected = "apples are my favor(i/j)te fru(i/j)t"
            const actual = polybius("115353135134 112451 2345 1211154324424451 1224544244", false)
            expect(actual).to.equal(expected)
        })

        it("should return false if input has odd amount of characters while decoding", () =>{
            actual = polybius("112131415", false)
            expect(actual).to.be.false
        })
    
    })

})