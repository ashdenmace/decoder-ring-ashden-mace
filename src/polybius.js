// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encodeABC = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
  const decodeABC = { ' ': ' ','11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };

  function polybius(input, encode = true) {
    const string = input.toLowerCase();
    const characters = string.split('');
  
    if (encode === true) {
      const mapArray = characters.map((character) => {
        if(character === ' '){
          return character
        }
        
        for (let item in encodeABC) {
          if (item === character) {
            return encodeABC[item];
          }
        }
      });
      return mapArray.join('');
      
    }else if (encode === false){
      const stringsArray = string.split(' ')
    /// check
      const joinedString = stringsArray.join('')
      if (joinedString.length % 2 === 1){
        return false
      }
    /// decode  
      const resultArray = stringsArray.map((string) => {
      let encodedChars = []
      for (let i = 0; i < string.length-1; i+= 2){
        encodedChars.push((string[i]+''+string[i+1]))
      }
      const decodeMap = encodedChars.map((number) => {
       
        for (let item in decodeABC){
          if(item === number) {
            return decodeABC[item]
          }
        }
      })
      const joined = decodeMap.join("")
      return joined
    })
      return resultArray.join(' ')
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
