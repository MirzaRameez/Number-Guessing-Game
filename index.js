#! /usr/bin/env node
import inquirer from "inquirer";
// 1) generate a random no. by comp
// 2) take input from user for guessing no.
// 3) compare user input and comp. generted no. 
// 4) show result
console.log("Welocome to the Simple Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber", type: "number", message: "Please guess a number"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
