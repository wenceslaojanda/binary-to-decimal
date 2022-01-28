let input = document.querySelector("#num-binario");
let btnConverter = document.querySelector("#btn-convert");
let show = document.querySelector(".show");


btnConverter.addEventListener("click", (e) => {
    let binary = input.value;
    let isBinary = validateBinaryNumber(binary);
    if(!isBinary){
        return showErrorMessage();
    }
    let result = convertBinary(binary);
    showResult(result);
    input.focus();
    input.select();
});

function convertBinary(binary) {
    let stringNumbers = binary.split("").reverse();
    let numbers = stringNumbers.map(num => parseInt(num));
    let decimalNum = 0;
    for(let i = 0; i < numbers.length; i++){
        decimalNum += numbers[i] * (2 ** i);
    }
    return decimalNum;
}

function showResult(result){
    show.classList.remove("error");
    show.textContent = result;
}

function validateBinaryNumber(num){
    let isBinary = false;
    num = parseInt(num);
    let expReg = /^[0-1]+$/;
    if(!isNaN(num)){
        isBinary = expReg.test(num);
    }
    return isBinary;
}

function showErrorMessage(){
    show.classList.add("error");
    show.textContent = "You must enter only 0 and 1";
    input.value = "";
    input.focus();
}