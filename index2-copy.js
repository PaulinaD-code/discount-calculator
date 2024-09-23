const form = document.querySelector('.container-calculator');
let inputPrice = document.querySelector('.input-price');
let reduction = document.querySelector('.reduction');
const checkBtn = document.querySelector('.check-btn');
let finalContainer = document.querySelector('.final-container');

const resetBtn = document.querySelector('.reset-btn');
let finalPrice = document.querySelector('.final-price');

    checkBtn.addEventListener('click', burgain)
    

    /*
   function price () {
        let firstPrice = inputPrice.value;
        discount = reduction.value
        let occasion =  (firstPrice * discount)
        let oc1 = occasion/100;
        let result = firstPrice - oc1;
        

        if(result < 0) {
            finalPrice.textContent += 'Podano błędą cenę'
        } else {
            finalPrice.textContent += `${result} złotych `
        }
    } 
    */


    resetBtn.addEventListener('click', () => { 
        inputPrice.value = ' '
        reduction.value = ''
        finalPrice.textContent = '';
        finalContainer.className = 'final-container'


    })

    
function burgain(){
    finalContainer.className = 'final-container-visible'
    let pierwszaCena = inputPrice.value;
    let obniżka = 100 - reduction.value;
    let cenaPoZnizce = (pierwszaCena * obniżka)/100
    let resultat = cenaPoZnizce.toFixed(2)

    if(cenaPoZnizce < 0){
        finalPrice.textContent = `Podano błędne wartości`
    } else {
        finalPrice.textContent = `${resultat} złotych` 
    } 
}

function checkKeyEvent(event){
    if(event.key === 'Enter'){
        burgain();
    }
}

