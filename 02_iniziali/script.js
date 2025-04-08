/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
// function nameInitials(oldArray, initialsArray) {
//   for (let i = 0; i < oldArray.length; i++) {
//     let nameList = oldArray[i];
//     let initials = nameList[0];
//     initialsArray.push(initials);
//     console.log(initialsArray);
//   }
//   return initialsArray;
// }

const nameInitials = (oldArray, newArray) => {
  newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    let nameList = oldArray[i];
    let initials = nameList[0];
    newArray.push(initials);
  }
  return newArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(nameInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
