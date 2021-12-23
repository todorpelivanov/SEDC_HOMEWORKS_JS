// ---------------HOMEWORK PART 1------------------------

// Write a JavaScript function which accepts a parameter and returns its type 
// and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

console.log(`--------------HOMEWORK PART 1---------------`);

// -------------------HOMEWORK PART 1 SOLUTION------------------------

function functionTypeOf(x) {
    console.log(typeof(x));
}
functionTypeOf(null);
functionTypeOf(true);
functionTypeOf(1);
functionTypeOf("String");
functionTypeOf();
// -------------------HOMEWORK PART 1 SOLUTION------------------------

// ---------------HOMEWORK PART 2-----------------------

// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

console.log(`--------------HOMEWORK PART 2---------------`);

// -------------------HOMEWORK PART 2 SOLUTION------------------------

function calcAge(hAge, dAge) {
    let humanAge = dAge * 7
    let dogAge = hAge / 7 
    console.log(`${dAge} dog years are equal to ${humanAge} human years`);
    console.log(`${hAge} human years are equal to ${dogAge} dog years`);
}
calcAge(49, 5);
// -------------------HOMEWORK PART 2 SOLUTION------------------------

// ---------------HOMEWORK PART 3-----------------------

// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

console.log(`--------------HOMEWORK PART 3---------------`);

// -------------------HOMEWORK PART 3 SOLUTION------------------------

let enterCash = parseInt(prompt(`Please enter the ammount of cash you want to withdraw`));

function atm(enterCash) {
    let Money = 1000;
    let giveCash = 1000 - enterCash;
    if (isNaN(enterCash) == false) {
    if(enterCash > 1000) {
        console.log(`You dont have that ammount of cash`)
        alert(`You dont have that ammount of cash`)
    } else {
        console.log(`You just withdraw ${enterCash} ammount of cash, and now you have ${giveCash} ammount of cash left`)
        alert(`You just withdraw ${enterCash} ammount of cash, and now you have ${giveCash} ammount of cash left`)
    }
} else {
    console.log(`Please enter the correct anmmount you want to withdraw with numbers`)
    alert(`Please enter the correct anmmount you want to withdraw with numbers`)
}
}

atm(enterCash);

// -------------------HOMEWORK PART 3 SOLUTION------------------------

// decki jas bez da vi gi gledam resenijata dodeka dobivaj feedback na domasnovo, ke vi gi resam i onie student excercises tri komada

// -----------------------STUDENT EXCERCISE 1 -------------------------

console.log(` -----------------------STUDENT EXCERCISE 1 -------------------------`);

// Write 4 functions
// All functions take 2 parameters and output a result
// Function that sums 2 numbers
// Function that subtracts 2 numbers
// Function that multiplies 2 numbers
// Function that divides 2 numbers

// -----------------------STUDENT EXCERCISE 1 SOLUTION -------------------------

function sumNumbers(x, y) {
    console.log(x + y);
}

function subtractNumbers(x, y) {
    console.log(x - y);
}

function multiplyNumbers(x, y) {
    console.log(x * y);
}

function divideNumbers(x, y) {
    console.log(x / y);
}

sumNumbers(20, 34);
subtractNumbers(100, 45);
multiplyNumbers(10, 4);
divideNumbers(80, 20);

// -----------------------STUDENT EXCERCISE 1 SOLUTION -------------------------

// -----------------------STUDENT EXCERCISE 2 -------------------------

console.log(` -----------------------STUDENT EXCERCISE 2 -------------------------`);

// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius
 //to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit
 //to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);
// Time to accomplish: 15 minutes.

// -----------------------STUDENT EXCERCISE 2 SOLUTION -------------------------

function celToFahr(x) {
    let resultFahr = x * 1.8 + 32;
    console.log(`${x} celsius degrees are equal to ${resultFahr} Fahrenheit degrees`)
    return resultFahr;
}

function fahrToCel(x) {
    let resultCel = (5/9) * (x-32);
    console.log(`${x} Fahrenheit degrees are equal to ${resultCel} Celsius degrees`)
    return resultCel;
}

celToFahr(25);
fahrToCel(150);

// -----------------------STUDENT EXCERCISE 2 SOLUTION -------------------------

// -----------------------STUDENT EXCERCISE 3 -------------------------

console.log(` -----------------------STUDENT EXCERCISE 3 -------------------------`);

// THE AGE CALCULATOR
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// -----------------------STUDENT EXCERCISE 3 SOLUTION -------------------------

function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear
    console.log(`You are ${age} years old at the moment`)
}

calculateAge(1939);
calculateAge(1965);
calculateAge(1988);

// -----------------------STUDENT EXCERCISE 3 SOLUTION -------------------------