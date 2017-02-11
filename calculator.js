var number = prompt("First number?");
var operator = prompt("Which operation? (Add, Subtract, Multiply, Divide)");
var number2 = prompt("Second number?");
function divide(num1, num2){
  window.alert(num1 / num2);
}
if (operator == "Divide")
{
  this.divide(number, number2);
}

function multiply(num1, num2){
  window.alert(num1 * num2);
}
if(operator == "Multiply"){
  this.multiply(number, number2)
}

function add(num1, num2){
 var answer=parseInt(num1) + parseInt(num2);
  window.alert("The answer is " +answer);
}
if(operator == "Add"){
  this.add(number, number2)
}

function subtract(num1, num2){
  window.alert(num1 - num2);
}
if(operator == "Subtract"){
  this.subtract(number, number2)
}
