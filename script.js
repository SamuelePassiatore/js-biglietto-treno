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
7. Inserisco il prezzo finale nel DOM
8. Inserisco altre informazioni, come il prezzo prima dello sconto, l'età e il chilometraggio indicati dall'utente.
*/


// Variabili prezzo per chilometro
const priceKm = 0.21;
////console.log(priceKm);

// 1 - Recupero gli elementi in pagina
const costKm = document.getElementById('km-cost');
const kmChoice = document.getElementById('km-choice');
const ageChoice = document.getElementById('age-choice');
const normalPrice = document.getElementById('normal-price');
const finalPrice = document.getElementById('final-price');

// 2 - Chiedo all'utente il numero di km che dovrà percorrere
const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', 30).trim());
////console.log(userKm);

// 3 - Chiedo all'utente la sua età 
const userAge = parseInt(prompt('Quanti anni hai?', 20).trim());
////console.log(userAge);

let isValid = true;

// ! Controllo
if (isNaN(userKm) || userKm <= 0 || userKm > 2000) {
    isValid = false;
    alert('Devi inserire un numero di km tra 1 a 2000');
}

if (isNaN(userAge) || userAge <= 0 || userAge > 105) {
    isValid = false;
    alert("Devi inserire un'età tra 1 a 105");
}

if (isValid) {
// 4 - Calcolo il prezzo totale del viaggio
const ticketPrice = (userKm * priceKm);
////console.log(ticketPrice);

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

// 7 - Inserisco il prezzo finale nel DOM
finalPrice.innerText = discountPrice.toFixed(2) + ' €';

// 8 - Inserisco nel DOM il prezzo prima dello sconto, l'età e il chilometraggio indicati dall'utente.
costKm.innerText = priceKm + ' €';
kmChoice.innerText = userKm;
ageChoice.innerText = userAge;
normalPrice.innerText = ticketPrice.toFixed(2) + ' €';
}


















