// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    if(alphabet.length !== 26) return false;
    const string = input.toLowerCase()
    const characters = string.split('');
    const solution = alphabet.split('')

    function uniqueCharacterCheck(userABC) {
      const charSet = {};
      for (let i = 0; i < userABC.length; i++) {
        const character = userABC[i];
        if (charSet[character]) {
          return false;
        }
    
        charSet[character] = true;
      }
    
      return true;
    }

    if(uniqueCharacterCheck(alphabet) === false) {
      return false
    }

    if(encode === true){

      const indexes = characters.map((character)=> {
        if(character === ' ') return ' '
        else return abc.indexOf(character)
      })
      const test = indexes.map((index) => {
        if(index === ' ') return ' '
        else return alphabet[index];
      })
      return test.join('')

    } else if(encode === false){

      const indexes = characters.map((character) => {
        if(character === ' ') return ' '
        else return solution.indexOf(character)
      })
      const test = indexes.map((index) =>{
        if(index === ' ') return ' '
        else return abc[index]
      })
      return test.join('')

      }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
