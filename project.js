// 1. Deposit money
// 2. determine number of line to bet on
// 3. collect bet amount
// 4. spin slot machine
// 5. check if user won
// 6. give user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
// global variable for rows & collumns

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
//how many of each symbol is on the reel

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}
//the value/multiplier of each "symbol"; A is worth 5 i.e



const deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        //parseFloat to check if the user input is a number or NaN.

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, please try again.");
        }
        //if the deposit amount is not a number or the amount is less than or equal to 0 then the console log displays.
        else {
            return numberDepositAmount;
        }
        //loops infinitely until user enters valid amount
    
    }
};

const getNumberOfLines = () => {

    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        //parseFloat to check if the user input is a number or NaN.

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3){
            console.log("Invalid amount, please try again.");
        }
        //if the deposit amount is not a number or the amount is less than or equal to 0 then the console log displays.
        else {
            return numberOfLines;
        }
        //loops infinitely until user enters valid amount
    }
};

const getBet = (balance, lines) => {
    //parameter of balance
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
        //parseFloat to check if the user input is a number or NaN.

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet amount, please try again.");
        }
        //if the deposit amount is not a number or the amount is less than or equal to 0 then the console log displays.
        else {
            return numberBet;
        }
        //loops infinitely until user enters valid amount
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);