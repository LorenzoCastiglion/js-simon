/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

"use strict"


const memoryHtml = document.getElementById('memory');

const btn = document.querySelector('button');

let num = [];

let numNum = 5;

// generatore dei cinque numeri
while (num.length < numNum){
    let generate = randomNumber(1,100);

// controllo numeri generati per non pushare doppioni nell'array
    if(!num.includes(generate)){
        num.push(generate)
    }
}


// stampo i nnumeri casuali nel DOM
memoryHtml.innerHTML = num;









