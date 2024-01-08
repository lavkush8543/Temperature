var inputType= document.getElementById('sam');
var resultType= document.getElementById('Dav');
var solutionType= document.getElementById('fri');
var solveType= document.getElementById('sem');

solutionType.addEventListener("change", Mysolve);
solveType.addEventListener("change", Mysolve);
inputType.addEventListener("keyup", Mysolve);

function Mysolve(){
    var option1 = solutionType.value;
    var option2 = solveType.value;
    if (option1 === "Celsius" && option2 === "Fahrenheit") {
        resultType.value = Number(inputType.value) * (9/5) + 32;
    } else if (option1 === "Celsius" && option2 === "Celsius") {
        resultType.value = Number(inputType.value);
    } else if (option1 === "Celsius" && option2 === "Kelvin") {
        resultType.value = Number(inputType.value) + 273.15;
    } else if (option1 === "Fahrenheit" && option2 === "Celsius") {
        resultType.value = (Number(inputType.value) - 32) * (5/9);
    } else if (option1 === "Fahrenheit" && option2 === "Kelvin") {
        resultType.value = (Number(inputType.value) - 32) * (5/9) + 273.15;
    }else 
    if(option1 === "Fahrenheit" && option2 === "Fahrenheit"){
    	resultType.value = Number(inputType.value);
    }else 
    if(option1 === "Kelvin" && option2 === "Celsius"){
    	resultType.value = Number(inputType.value)- 273.15;
    }else 
    if(option1 === "Kelvin" && option2 === "Fahrenheit"){
    	resultType.value= [Number(inputType.value)- 273.15]*(9/5)+32;
    }else 
    if(option1 === "Kelvin" && option2 === "Kelvin"){
    	resultType.value= Number(inputType.value);
    }
}
