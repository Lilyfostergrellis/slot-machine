// 1. Deposit money
// 2. determine number of line to bet on
// 3. collect bet amount
// 4. spin slot machine
// 5. check if user won
// 6. give user their winnings
// 7. play again

const prompt = require("prompt-sync")();

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

const depositAmount = deposit();
console.log(depositAmount);