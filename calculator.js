$(document).ready(function() {
  $("#calculate").click(function() {
    var number = prompt("First number?");
    var operator = prompt("Which operation? (Add, Subtract, Multiply, Divide)");
    var number2 = prompt("Second number?");

    myCalc(operator, number, number2);
  });

});





function myCalc(operator, number, number2) {
  var noodle = ("yum");

  init();

  function init() {
    console.log("init");
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
    out(num1 / num2);
  }

  function multiply(num1, num2) {
    out(num1 * num2);
  }

  function add(num1, num2) {
    var answer = parseInt(num1) + parseInt(num2);
    out("The answer is " + answer);
  }

  function subtract(num1, num2) {
    out(num1 - num2);
  }

  function out(output) {
    console.log(output);
    $("#answer")
      .html(output);
  }
}
