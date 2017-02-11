var number = prompt("First number?");
var operator = prompt("Which operation? (Add, Subtract, Multiply, Divide)");
var number2 = prompt("Second number?");

myCalc();

function myCalc() {
  var noodle = ("yum");

  init();

  function init() {

    operator = operator.toLowerCase();

    switch (operator) {
      case "divide":
      case "/":
        divide(number, number2);
        break;
      case "multiply":
      case "*":
        multiply(number, number2);
        break;
      case "add":
      case "+":
        add(number, number2);
        break;
      case "subtract":
      case "-":
        subtract(number, number2);
        break;

    }



   
  }

  function divide(num1, num2) {
    window.alert(num1 / num2);
  }

  function multiply(num1, num2) {
    window.alert(num1 * num2);
  }

  function add(num1, num2) {
    var answer = parseInt(num1) + parseInt(num2);
    window.alert("The answer is " + answer);
  }

  function subtract(num1, num2) {
    window.alert(num1 - num2);
  }
}
