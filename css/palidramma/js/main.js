let word = prompt('Inserisci una parola');
console.log('hai scritto: ' + word);

let lettaAlcontrario = (reverseString(word));

if (word % 2
   == lettaAlcontrario) {
   console.log('The word written is a palindrome')
} else {
   console.log('The word written is not a palindrome')
}



function reverseString(str) {
   return str.split('').reverse('').join('');
}
