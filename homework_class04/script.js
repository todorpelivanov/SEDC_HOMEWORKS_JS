console.log(`-----homework Class 04--------`);

console.log(`-------Homework part 1--------`)

// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

let infoString = ['Bibe', 'Angry', 'Yell']
function tellstory(x) {
    let result = (`This is ${x[0]}. ${x[0]} is a ${x[1]} person. Today she is ${x[1]}. She ${x[2]} all day. The end.`);
    return result;
}
console.log(tellstory(infoString));
// alert(tellstory(infoString));

console.log(`-------Homework part 2--------`);

// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid 
// number and call it for every number. If one of the numbers of the array 
// is invalid show an error message instead of a result.

let secondFiveNumbersArray = [25, 43, 'f', 65, 2];
let fiveNumbersArray = [25, 95, 56, 65, 2]; //ova e za proverka na bonusot cisto

function sumOfNumbers(x) {
    let sumOfFiveNumbers = x[0] + x[1] + x[2] + x[3] + x[4] 
    return sumOfFiveNumbers;
}

console.log(sumOfNumbers(fiveNumbersArray));
// alert(sumOfNumbers(fiveNumbersArray));

console.log(`BONUS-------Homework part 2--------BONUS`);
//-------------BONUS---------------

function validateNumber(x) {
    let resultIsNumber = x;
    if (isNaN(resultIsNumber)) {
        console.log(`Error! The input is not a valid number!`)
    } else {
        console.log(resultIsNumber)
    }
    return resultIsNumber;
}

validateNumber(secondFiveNumbersArray[0]);
validateNumber(secondFiveNumbersArray[1]);
validateNumber(secondFiveNumbersArray[2]);
validateNumber(secondFiveNumbersArray[3]);
validateNumber(secondFiveNumbersArray[4]);

// ------------vtor nacin sto mi tekna da go napravam---------------

function validateNumber1() {
    if(isNaN(secondFiveNumbersArray[0])) {
        console.log(`Error! The first element in the array isn't a valid number`)
    } else if (isNaN(secondFiveNumbersArray[1])) {
        console.log(`Error! The second element in the array isn't a valid number`)
    } else if (isNaN(secondFiveNumbersArray[2])) {
        console.log(`Error! The third element in the array isn't a valid number`)
    } else if (isNaN(secondFiveNumbersArray[3])) {
        console.log(`Error! The fourt element in the array isn't a valid number`)
    } else if (isNaN(secondFiveNumbersArray[4])) {
        console.log(`Error! The fifth element in the array isn't a valid number`)
    } 
}

validateNumber1();

// bi sakal i feedback vo vrska so prviot i vtoriot nacin na resavanje za da znam
// koj nacin e podobar(i zosto bi bilo toa taka), potocen i koj se 
// upotrebuva poveke vo vakov slucaj. Ne mozev da se odlucam koe resenie pa zatoa 
// vi gi pustiv i dvete.  THX :)

//------------------HOMEWORK PART 3-----------------------
// Write a JavaScript program that will read in a number and write out its digits

console.log(`-------Homework part 3--------`);