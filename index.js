import inquirer from "inquirer";
const systemGeneratedNo = Math.random() * 10;
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: ",
    },
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, "sYs");
if (userGuess === systemGeneratedNo) {
    console.log("Yeah your answer is correct \n You Win! ");
}
else {
    console.log("Please try again better luck next time!");
}
