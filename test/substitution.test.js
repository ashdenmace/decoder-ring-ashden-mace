// Write your tests here!
const {expect} = require("chai")
const { substitution } = require("../src/substitution")

describe("----Substitution Function Tests Written by Ashden Mace----", () => {
    describe("Error Handling", () => {
        it("should return false if no substitution alphabet is given", () => {
            const actual = substitution("Raccoons")
            expect(actual).to.be.false
        })
        it("should return false if substitution alphabet is not 26 characters long", () => {
            const actual = substitution("Birds", "abcdefg")
            expect(actual).to.be.false
        })
        it("should return false if substitution alphabet does not have uniqure characters", () => {
            const actual = substitution("Peanuts", "pppoknijbuhvygctfxrdzeswaq")
            expect(actual).to.be.false
        })
    })
   
    describe("Encoding", () => {
        it("should encode a message with the user's alphabet", () => {
            const expected = "jkvvc" 
            const actual = substitution("Hello", "plmoknijbuhvygctfxrdzeswaq")
            expect(actual).to.equal(expected)
        })
    
        it("should encode message if nonalphabetic characters are used in user's alphabet", () => {
            const expected = "rfzb!!*v"
            const actual = substitution("Squirrel", "pl$o*nijbuhvygctf!rdzeswaq")
            expect(actual).to.equal(expected)
        })
    
        it("should encode message with spaces", () => {
            const expected = "$jzgh dj* rfzb!!*v"
            const actual = substitution("Chunk the Squirrel", "pl$o*nijbuhvygctf!rdzeswaq")
            expect(actual).to.equal(expected)
        })

    })
    describe("Decoding", () => {
        it("should decode a message with the user's alphabet", () => {
            const expected = "squirrel"
            const actual = substitution("ihnxbbsc","qwaeszrdxtfcygvuhbijnokmpl", false)
            expect(actual).to.equal(expected)
        })
        it("should still decode with nonalphabetic characters in user's alphabet", () => {
            const expected = "chunk"
            const actual = substitution("-dngf",".w-eszrdxtfcygvuhbijnokmpl", false)
            expect(actual).to.equal(expected)
        })
        it("should decode message with spaces", () => {
            const expected = "chunk the squirrel"
            const actual = substitution("mjzgh djk rfzbxxkv", "plmoknijbuhvygctfxrdzeswaq", false)
            expect(actual).to.equal(expected)
        })
    })
      


})