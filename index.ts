import inquirer from "inquirer";//importing the library of inquirer

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);//await inquirer.promt is user here in order to obtain Data from the user



// Condiontional Statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
  console.log(answer.firstNumber);
  console.log(answer.secondNumber);
  
  console.log("error");//will run else wise
  
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator")
}

// The pure logic behind this code is if else statement and arthematic operaters!!!!!