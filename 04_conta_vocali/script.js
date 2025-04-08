/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

// ######################################################################
// Functions
//
function isCharVowel(char) {
  // bool
  return (
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
  );
}
// Dichiara la funzione qui.
// function vowelsFinder(word) {
//   let vowelsArray = [];
//   for (let i = 0; i < word.length; i++) {
//     let wordLetters = word[i];
//     if (isCharVowel(wordLetters)) {
//       vowelsArray.push(wordLetters);
//     }
//   }

//   return vowelsArray;
//   console.log(vowelsArray.length);
// }

const vowelsFinder = (word) => {
  let vowelsArray = [];
  for (let i = 0; i < word.length; i++) {
    let wordLetters = word[i];
    if (isCharVowel(wordLetters)) {
      vowelsArray.push(wordLetters);
    }
  }

  return vowelsArray;
  console.log(vowelsArray.length);
};

// ######################################################################
// Main
//

const word = "javascript";
// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsFinder(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
