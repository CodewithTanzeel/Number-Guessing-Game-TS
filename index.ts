import inquirer from "inquirer";
type ansType = {
  userGuess: number;
};

const systemGeneratedNo = Math.random() * 10;//This willl generatea a random number which will be multiplied by
// as shown!!

const answers: ansType = await inquirer.prompt([
  {
    type: "number",//This restricts that only number is allowed to input!!!
    name: "userGuess",//Declaring value of key  to userguess beacause user will guess!!
    message: "Write your guess b/w 1 to 10: ",//This will print on user screen !!!
  },
]);

const { userGuess } = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, "sYs");
if (userGuess === systemGeneratedNo) {
  console.log("Yeah your answer is correct \n You Win! ");
} else {
  console.log("Please try again better luck next time!");
}


// Again using if else staments we are declaring that what happpens when the system generated No and the user guess message matches as statement above in the console of first if!!!!!!
