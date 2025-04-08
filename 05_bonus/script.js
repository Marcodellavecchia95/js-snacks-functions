/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

function hello(name) {
  let hours = new Date().getHours();
  let goodMorning = `Buongiorno ${name}`;
  let goodAfternoon = `Buon pomeriggio ${name}`;
  let goodEvening = `Buonasera ${name}`;
  if (hours > 0 && hours < 14) {
    return goodMorning;
  } else if (hours >= 14 && hours <= 17) {
    return goodAfternoon;
  } else {
    return goodEvening;
  }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
