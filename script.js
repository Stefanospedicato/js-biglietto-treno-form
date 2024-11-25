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
const fullname = document.getElementById('fullname')
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codice = document.getElementById('codice');
const prezzoFinale = document.getElementById('prezzo');
//Dati utili per calcolo del prezzo.
const prezzoKm = 0.21;
let price = 0;
let sconto = 0;

//Funzioni per numeri casuali per carrozza e numero biglietto.
const random10 = num => Math.ceil(Math.random()*10)
const random10000 = num => Math.ceil(Math.random()*10000)
let numero;
console.log(random10(numero))
console.log(random10000(numero))

//Funzioni per generare prezzo e per il reset al cliccare dei bottoni.
generaPrezzo.addEventListener('click', () =>{
  const kms= parseFloat(km.value);
  price = (prezzoKm * kms).toFixed(2);
  
  if (minorenne) {sconto = 20 / 100;
    offerta.innerHTML = 'Sconto Young'
  }
  else if (over) {sconto = 40 / 100;
    offerta.innerHTML = 'Sconto Over'
  }
  else{offerta.innerHTML = 'Tariffa Standard'
  }
  
  let prezzoScontato = (price * (1 - sconto)).toFixed(2);
  
  fullname.innerHTML = username.value.toUpperCase()
  carrozza.innerHTML = random10();
  codice.innerHTML = random10000();
  prezzoFinale.innerHTML = price + ' ' + 'euro.';
  card.classList.toggle('hide');
})

reset.addEventListener('click', ()=>{
  km.value = '';
  username.value='';
  fasciaEta.value='Seleziona la tua età';
  offerta.value ='';
  fullname.value ='';
  carrozza.value='';
  codice.value='';
  card.classList.toggle('hide')
})







