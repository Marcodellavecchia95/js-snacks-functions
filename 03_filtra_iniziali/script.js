/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let newArray = [];
// Dichiara la funzione qui.
function findNamesLetter(namesArray, toFindLetter) {
  let newNamesList = [];
  for (let i = 0; i < namesArray.length; i++) {
    let name = namesArray[i];
    if (toFindLetter === name[0]) {
      newNamesList.push(name);
    }
  }
  return newNamesList;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findNamesLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
