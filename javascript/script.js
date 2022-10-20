/*
Chiedere all'utente quanti km deve percorrere
Chiedere all'utente quanti anni ha
definire il prezzo per km 

SE l'età è > 18
    si applicherà uno sconto del 40% al biglietto
ALTRIMENTI
    si applicherà uno sconto del 20%
*/

const distance = parseInt(prompt('Quanti Chilometri devi percorrere?'));
const age = parseInt(prompt('Quanti anni hai?'));
console.log('distanza :', distance , 'età:', age)

const ticketPrice = distance * 0.21;
console.log('prezo del biglietto: €', ticketPrice)


// if (age >= 18 && age <= 65) {
//     console.log('Non hai diritto a nessuno sconto',(ticketPrice).toFixed(2))

// } else 

if (age < 18) {
    console.log('Hai diritto al 20% di sconto: il prezzo finale è €',(ticketPrice - (ticketPrice * 0.20)).toFixed(2))

} else if (age > 65) {
    console.log('Hai diritto al 40% di sconto: il prezzo finale è €',(ticketPrice - (ticketPrice * 0.40)).toFixed(2))
} else {
    console.log('Non hai diritto a nessuno sconto')
}