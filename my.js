let defaultValue = "0";


const screen = document.querySelector(".screen");
const calcButtons = document.querySelector(".calc-buttons");


function buttonClick(value){
    if (isNaN(value)) {
        displaySymbol(value);
    } else {
        displayNumber(value);
    }
    
}


function displaySymbol(valueSymbol){

}

function displayNumber(valueNumber){
    if (defaultValue === "0"){
        defaultValue = valueNumber;
    } else {
        defaultValue += valueNumber;
    }
    screen.innerText = defaultValue;
}


calcButtons.addEventListener("click", function(event){
console.log("Hello");
buttonClick(event.target.innerText);
})




