// TODO: this file! :)

const form = document.querySelector("form");

const evensOutput = document.querySelector("#evens output");
const oddsOutput = document.querySelector("#odds output");
const numberBankOutput = document.querySelector("#numberBank output");

const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const clearOdds = document.getElementById("clearOdds");
const clearEvens = document.getElementById("clearEvens");
const clearNumberBank = document.getElementById("clearNumberBank");

let numberBankArr = [];
let numberOddArr = [];
let numberEvenArr = [];

// In this section, all numberBank array will be printed in section id numberBank
const printAllNumberBank = () => {
    numberBankOutput.innerText = numberBankArr;
}

// In this section, all numberBank array will be printed in section id numberBank
const printAllOdds = () => {
    oddsOutput.innerText = numberBankArr;
}

// In this section, all numberBank array will be printed in section id numberBank
const printAllEvens = () => {
    evensOutput.innerText = numberBankArr;
}


// If Addnumber submit button is pressed, store in numberBankArr.
form.addEventListener("submit", function(event) {
    //prevent to refresh page
    event.preventDefault();

    const data = new FormData(event.target);
    const numData = data.get("number");
    console.log(data.get("number"));
    if(numData != ""){ // If User inputs number
        numberBankArr.push(numData);
        printAllNumberBank();
        form.reset();
    }else{ //If User inputs nothing
        alert("Please input a number.");
        form.reset();
    }

});

// If clear button is pressed, clear it.
clearNumberBank.addEventListener("click", function(event){  
    numberBankArr = [];
    printAllNumberBank();
});

// If clear button is pressed, clear it.
clearEvens.addEventListener("click", function(event){  
    numberEvenArr = [];
    printAllEvens();
});

// If clear button is pressed, clear it.
clearOdds.addEventListener("click", function(event){  
    numberOddArr = [];
    printAllOdds();
});

// If sortOne button is pressed, 
// If evenNumber, store in numberEvenArr
// If oddNumber, store in numberOddArr
sortOne.addEventListener("click", function(event){  

    if(numberBankArr.length > 0){
        const getNum = parseInt(numberBankArr.shift());
        console.log(getNum);
        console.log(typeof(getNum));
        console.log(numberBankArr);
    
        if(getNum % 2 == 0){

            numberEvenArr.push(getNum);
            numberEvenArr = numberEvenArr.sort((a,b)=>a-b);
            evensOutput.innerText = numberEvenArr;
            printAllNumberBank();
        }else{
            
            numberOddArr.push(getNum);
            numberOddArr = numberOddArr.sort((a,b)=>a-b);
            oddsOutput.innerText = numberOddArr;
            printAllNumberBank();
        }
    }
});

// In this section, numberBankArr data will be separated to numberEvenArr and numberOddArr.
// And numberBankArr will be initialized.
sortAll.addEventListener("click", function(event){

    if(numberBankArr.length > 0){

        for(let i=0 ; i<numberBankArr.length ; i++){
            if(numberBankArr[i] % 2 ==0){
                numberEvenArr.push(numberBankArr[i]);
            }else{
                numberOddArr.push(numberBankArr[i]);
            }
        }
        numberEvenArr = numberEvenArr.sort((a,b)=>a-b);
        numberOddArr = numberOddArr.sort((a,b)=>a-b);
        numberBankArr = [];
        evensOutput.innerText = numberEvenArr;
        oddsOutput.innerText = numberOddArr;
        printAllNumberBank();
    }
});
