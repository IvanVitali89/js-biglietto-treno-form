const age = document.getElementById('inputEtà');
Number(age);

const kilometres = document.getElementById('inputkilometri');
Number(kilometres);

let price = 0;
const myForm =document.getElementById('form');
const resultContainer = document.querySelector('#result-container');
const resultText = resultContainer.querySelector('h3');


myForm.addEventListener('submit', function (event) {
    
   
    event.preventDefault();
    console.log('età: ', age.value);
    console.log('kilometri: ', kilometres.value);

    if (isNaN(inputEtà) || isNaN(inputkilometri)) {
        alert("Il valore inserito non è corretto");
    }
    else if (age < 18) {
        price = ((kilometres * 0.21) * (80 / 100));
        alert(price.toFixed(2));

    } else if (age >= 65) {
        price = ((kilometres * 0.21) * (60 / 100));
        alert(price.toFixed(2));
    } else {
        price = (kilometres * 0.21);
        alert(price.toFixed(2));
    }

resultText.innerHTML = 'Il prezzo è', price;
resultContainer.classList.remove('d-none');

}); 

