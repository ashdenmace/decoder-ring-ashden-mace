// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function caesar(input, shift, encode = true) {
    const string = input.toLowerCase()
    if(!shift) return false;
    if(shift > 25) return false;
    if(shift < -25) return false;
    let characters = string.split('');
    
    if (encode === false) {
      shift = -(shift)
      const mapArray = characters.map((character) => {
        let currentLetterLocation = alphabet.indexOf(character);
        if (!alphabet.includes(character)) {
          let newLetter = character;
          return newLetter
        }
        let newIndex = currentLetterLocation + shift
        
        if(newIndex > 25){
          newIndex -= 26
          let newLetter = alphabet[newIndex]
          return newLetter
        }

        if(newIndex < 0) {
          newIndex +=26
          let newLetter = alphabet[newIndex]
          return newLetter
        }
      
        let newLetter = alphabet[newIndex];
        return newLetter;
      
      });
      return mapArray.join('');
    }  
    const mapArray = characters.map((character) => {
        let currentLetterLocation = alphabet.indexOf(character);
        if (!alphabet.includes(character)) {
          let newLetter = character;
          return newLetter
        }
        let newIndex = currentLetterLocation + shift
        
        if(newIndex > 25){
          newIndex -= 26
          let newLetter = alphabet[newIndex]
          return newLetter
        }

        if(newIndex < 0) {
          newIndex +=26
          let newLetter = alphabet[newIndex]
          return newLetter
        }
      
        let newLetter = alphabet[newIndex];
        return newLetter;
      
      });
      
      return mapArray.join('');
      

    }

 
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
