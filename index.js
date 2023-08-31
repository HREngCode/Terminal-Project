let rs = require('readline-sync');

// prompt operation question
// prompt number 1
// validate number
// prompt number 2
// function to perform operation
// return result as x

// rs.setDefaultOptions({limit: ['/', '*', '-', '+']});

let numOne = 0;
let numTwo = 0;
let operator = '';

getOperator()

function getOperator() {
  operator = rs.question('What operation would you like to perform? ');
  if (operator != '/' && operator != '*' && operator != '-' && operator != '+') {
    console.log("That is not a valid operation")
    getOperator()
  }
  else {
    getFirstNumber()
  }
}

function getFirstNumber() {
  const firstNumber = rs.questionInt('Please enter your first number: ');
  getSecondNumber()
  numOne = firstNumber;
}

function getSecondNumber() {
  const secondNumber = rs.questionInt('Please enter your second number: ');
  numTwo = secondNumber;
}

twoNumbersEqual();

function twoNumbersEqual() {
  let x = 0;
  if (operator == '/') {
    result = numOne / numTwo;
  }
  else if (operator == '*') {
    x = numOne * numTwo;
  }
  else if (operator == '-') {
    x = numOne - numTwo;
  }
  else if (operator == '+') {
    x = numOne + numTwo;
  }
  console.log("The result is " + x );
}



// function getOperator() {
//   const operator = rs.keyIn('What operation would you like to perform? ');
//   console.log(operator);

//   if(operator != '/' && operator != '*' && operator != '-' && operator != '+') {
//     console.log("Please enter a valid operator: /, *, -, or +");
//     getOperator();
//   }
//   return operator;
  
// }

// getOperator();
// getFirstNumber();
// getSecondNumber();
// addTwoNumbers();

// function getFirstNumber() { 
//   const firstNumber = rs.question('Please enter your first number: ');
//   console.log(firstNumber);
//   return firstNumber;
// }

// function getSecondNumber() {
//   const secondNumber = rs.question('Please enter your second number: ');
//   console.log(secondNumber);
//   return secondNumber;
// }

// function addTwoNumbers(firstNumber, secondNumber, operator) {
//   let result = 0;
//   if (operator == '/'){
//     result = parseInt(firstNumber) / parseInt(secondNumber);
//   }
//   else if (operator == '*'){
//     result = parseInt(firstNumber) * parseInt(secondNumber);
//   }
//   else if (operator == '-'){
//     result = parseInt(firstNumber) - parseInt(secondNumber);
//   }
//   else if (operator == '+'){
//     result = parseInt(firstNumber) + parseInt(secondNumber);
//   }
//   console.log(firstNumber + ' ' + operator + ' ' + secondNumber + ' equals ' + result);
//   return result;
// }




// if (operationToPerform != "/" || operationToPerform != "*" || operationToPerform != "-" || operationToPerform != "+") {
//   console.log("Please enter a valid operator such as '/', '*', '-', or '+'")
// }
