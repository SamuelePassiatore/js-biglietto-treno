console.log('JS OK');

/* Chiedi all'utente il numero di chilometri che vuole percorrere e la sua età.
   Calcola il prezzo totale del viaggio, tenendo conto di alcune regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni.
   - va applicato uno sconto del 40% per gli over 65.
   - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/* 
1. Prendo l'elemento in pagina.
2. Chiedo all'utente il numero di km che dovrà percorrere.
3. Chiedo all'utente la sua età.
4. Calcolo il prezzo totale del viaggio.
5. Applico uno sconto del 20% ai minorenni (<18) e uno del 40% agli over 65 (>= 65).
6. Sottraggo gli eventuali sconti al prezzo totale del viaggio.
7. Aggiungo il simbolo dell'euro.
*/

const max = 0.21;

// 1 - Recupero l'elemento in pagina
const targetElement = document.getElementById('target');
//// console.log(targetElement);

// 2 - Chiedo all'utente il numero di km che dovrà percorrere
const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', 30).trim());
//// console.log(userKm);

// 3 - Chiedo all'utente la sua età 
const userAge = parseInt(prompt('Quanti anni hai?', 20).trim());
//// console.log(userAge);

// TODO VALIDATION

// 4 - Calcolo il prezzo totale del viaggio
const ticketPrice = (userKm * max).toFixed(2);
//// console.log(ticketPrice);

// 5 - 6 Applico gli eventuali sconti e li sottraggo dal prezzo totale
let discountPrice;

if (userAge < 18){
    discountPrice = ticketPrice - (ticketPrice * 20 / 100);
} else if (userAge >= 65){
    discountPrice = ticketPrice - (ticketPrice * 40 / 100);
} else {
    discountPrice = ticketPrice;
}
////console.log(discountPrice);

// 7 - Aggiungo il simbolo dell'euro 
discountPrice += '€';
console.log(discountPrice);
















