/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

"use strict"


const memoryHtml = document.getElementById('memory');

const btnGen = document.getElementById('genera')

let num = [];

let numNum = 5;

// bottone che avvia il gioco e genera i numeri
btnGen.addEventListener('click',

// generatore dei cinque numeri
function genNum () {
    while (num.length < numNum){
        let generate = randomNumber(1,100);
    
    // controllo numeri generati per non pushare doppioni nell'array
        if(!num.includes(generate)){
            num.push(generate)
        }
    }
    
    // printo l'array numrndm nel DOM
    memoryHtml.innerHTML = num;
    console.log(num);
    // setto una arrow funct che mi cancella il print array num nel DOM
setTimeout(() => {
    memoryHtml.innerHTML= '';
  }, 3000)
})


// creare un funzione che permetta all'utente di generare numeri da inserire in un array da confrontare in futuro

let input = document.getElementById('array-user');

const btnSend = document.getElementById('send');
btnSend.innerHTML= 'send'

const btnVerify = document.getElementById('verifica');
btnVerify.innerHTML= 'verifica'

const arrayUser = [];

function addNum (){
     
    
    let inputValue = parseInt(input.value);
    arrayUser.push(inputValue);
    console.log(arrayUser);
    input.value = '';

    if(arrayUser.length >= numNum ){
        btnSend.classList.add('d-none');
        btnVerify.classList.remove('d-none');

    }

}

btnSend.addEventListener('click', addNum)



// creare una funzione che verifichi il risultato dell'input dell'user
let loose = document.getElementById('sconfitta');


function verify (){
    btnVerify.removeEventListener('click', verify);
    let perdita = false;

    for(let i = 0; i < numNum; i++){

        if(arrayUser[i] !== num[i]){
            perdita = true;
            // return;
        }
    }

    if(perdita){
        setTimeout(() => {
            location.href = "https://www.youtube.com/watch?v=ttp6AMlSJEw";
          }, 3000)
        
    }else{
        console.log('hai vinto')
    }

    
}

btnVerify.addEventListener('click', verify)






