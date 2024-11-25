//Richiamo tutti i miei dati
const username = document.getElementById('nome-cognome');
const km = document.getElementById('km');
const fasciaEta = document.getElementById('anni-cliente');
const maggiorenne = document.getElementById('maggiorenne');
const minorenne = document.getElementById('minorenne');
const generaPrezzo = document.getElementById('genera');
const reset = document.getElementById('reset');
const over = document.getElementById('over');
const card = document.getElementById('card');

//Dati utili per calcolo del prezzo.
const prezzoKm = 0.21;
let price = 0;
let sconto = 0;

//Funzioni per generare prezzo e per il reset al cliccare dei bottoni.
generaPrezzo.addEventListener('click', () =>{
  const kms= parseFloat(km.value);
  price = prezzoKm * kms;
  
  if (minorenne.checked) {sconto = 20 / 100
  }
  else if (over.checked) {sconto = 40 / 100
  }
  else{sconto = 0
  }
  let prezzoScontato = price * (1 - sconto);

  card.classList.toggle('hide')

})

reset.addEventListener('click', ()=>{
  km.value = '';
  username.value='';
  fasciaEta.value='Seleziona la tua età';
})

//Funzioni per numeri casuali per carrozza e numero biglietto.
const random10 = num => Math.ceil(Math.random()*10)
const random10000 = num => Math.ceil(Math.random()*10000)
let numero;
console.log(random10(numero))
console.log(random10000(numero))
