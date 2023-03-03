/*
-far inserire un numero a scelta
-chiedere di un numero da 1 a 5
-fare generare un numero (per essere sicuri farlo comparire su console.log)
-fare il calcolo del valore tra l'utente e il pc
-controllare se la somma o la diff.è pari o dispari
-fare apparire il risultato(console.log
-risultato (if(vincitore)else(console.log ('perdente'))
*/

const primoNumero = parseInt(prompt('Inserisci un numero da 1 a 5'));

const primoRisultato = calcolaPariDispari(primoNumero);
console.log(primoRisultato);


alert('Ciao Mondo!');

const secondoNumero = parseInt(prompt('Inserisci il secondo numero'));
console.log(calcolaPariDispari(secondoNumero));


const risultato = somma(primoNumero, secondoNumero);

function somma(primoNumero, secondoNumero) {

    let somma = primoNumero + secondoNumero;
    console.log('la somma dei numeri è:' + somma);

    return somma;



}

function calcolaPariDispari(numeroDaControllare) {

    let risultato = '';

    if (numeroDaControllare % 2 == 0) {
        risultato = 'Il numero è pari';
    } else {
        risultato = 'Il numero è dispari';
    }

    return risultato;

}

if (somma == primoNumero) {

    console.log('Vinto');
} else {
    console.log('Perso');
}



for (let i = 0; i < 6; i++) {
    console.log(generaNumeroCasuale(1,5));
}


function generaNumeroCasuale(min, max) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroCasuale;
}