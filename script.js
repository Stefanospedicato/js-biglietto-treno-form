const username = document.getElementById('nome-cognome');
const km = document.getElementById('km');
const fasciaEta = document.getElementById('anni-cliente');
const maggiorenne = document.getElementById('maggiorenne')
const minorenne = document.getElementById('minorenne')
const over = document.getElementById('over')
const prezzoKm = 0.21;
let price = 0;
let sconto = 0;
const generaPrezzo = document.getElementById('genera');
const reset = document.getElementById('reset');


generaPrezzo.addEventListener('click', () =>{
  const kms= parseFloat(km.value);
  price = prezzoKm * kms;
  
  if (minorenne.checked) {sconto = 20 / 100
  }
  else if (over.checked) {sconto = 40 / 100
  }
  let prezzoScontato = price * (1 - sconto)
  console.log(prezzoScontato)
})

