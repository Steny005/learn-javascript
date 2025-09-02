const readlineSync = require('readline-sync'); //Install readline-sync
const userName = readlineSync.question('name please');
console.log(`welcome ${userName}`);

const userAge = readlineSync.question('May I know your age? ');

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}


  /* Key Points
Type Conversion: Converting data from one type to another is essential for performing various operations.
User Input: Using readline-sync to read user input from the terminal.
Error Handling: Checking the validity of user input and handling errors appropriately. */