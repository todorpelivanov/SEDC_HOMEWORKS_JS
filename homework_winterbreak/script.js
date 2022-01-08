console.log(`===========Winter Homework========`)
//Functions
console.log(`===========Functions===========`)
// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

console.log(`===========Task 1============`)

function mintuesToSeconds(minutes) {
     let seconds = minutes * 60
     return seconds
}

console.log(mintuesToSeconds(parseInt("15")));

// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
console.log(`===========Task 2============`)

function task2(x) {
    let nextNumber = x + 1;
    return nextNumber
}

console.log(task2(parseInt("5")));

// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.
console.log(`===========Task 3============`)

function hourToSec(x) {
    let result = (x * 60) * 60;
    return result
}

console.log(hourToSec(2));

// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
console.log(`===========Task 4============`)

function returnRemainder(x, y) {
    let result1 = (x % y);
    return result1
}

console.log(returnRemainder(11, 6))

// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
// The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.
console.log(`===========Task 5============`)

function howManyLegs(chickens, cows, pigs) {
    let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4)
    return totalLegs
}

console.log(howManyLegs(10, 23, 12))

// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
// characters in the first string is equal to the total number of characters in the second string.
console.log(`===========Task 6============`)

function twoStrings(string1, string2) {
    if (string1.length == string2.length) {
        console.log(`True`)
    } else {
        console.log(`False`)
    }
}

twoStrings(`Happy`, `Year`);

// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
console.log(`===========Task 7============`)

function sinOrPlu(word) {
    let lastWord = word.slice(-1)
    if(lastWord === 's') {
        console.log(`The word is in plural`)
    } else {
        console.log(`The word is not in plural`)
    }
    return lastWord
} 

sinOrPlu('Dogs');
sinOrPlu('Dog');


// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.
console.log(`===========Task 8============`)

function comparison(string1, string2) {
    if(typeof string1 === 'string' && typeof string2 === 'string') {
        if(string1.toUpperCase() === string2.toUpperCase()) {
             console.log(`Strings are identical`)
      } else {
             console.log(`Strings are not identical`)
             }
    } else {
        console.log(`Please enter valid string`)
    }
}

comparison('Dog', 'DOG');

// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.
console.log(`===========Task 9============`)

function numberToMonth(x) {
    if(x == 1) {
        console.log(`January`)
    } else if(x == 2) {
        console.log(`February`)
    } else if(x == 3) {
        console.log(`March`)
    } else if(x == 4) {
        console.log(`April`)
    } else if(x == 5) {
        console.log(`May`)
    } else if(x == 6) {
        console.log(`June`)
    } else if(x == 7) {
        console.log(`July`)
    } else if(x == 8) {
        console.log(`August`)
    } else if(x == 9) {
        console.log(`September`)
    } else if(x == 10) {
        console.log(`Octomber`)
    } else if(x == 11) {
        console.log(`November`)
    } else if(x == 12) {
        console.log(`December`)
    } else {
        console.log(`Wrong input! Please enter number from 1-12`)
    }
}

numberToMonth(4)

// Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?
console.log(`===========Task 10============`)

function checker(x) {
    if(x) {
        console.log(`The parameter is truthy`)
    } else {
        console.log(`The parameter is falsy`)
    }
}

checker(NaN);

// Arrays
console.log(`===========Arrays===========`);
// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.
console.log(`===========Task 0============`)

function taskOneFunction(anyNumber) {
    if(typeof anyNumber !== 'number') {
        return 'Please enter valid number'
    }
    let taskOneArray = []
    for(let i = 0; i < anyNumber; i++) {
        taskOneArray.push(i)
    }
    return taskOneArray
} 

console.log(taskOneFunction(50));
console.log(taskOneFunction('aq'));

// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.
console.log(`===========Task 1============`);

let secondTaskArray = ['Dog', 54, 12, '48', false, null];
function secondTaskFunction(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    return array[0];
}

console.log(secondTaskFunction(secondTaskArray));
console.log(secondTaskFunction(2));
console.log(secondTaskFunction([]));
console.log(secondTaskFunction(false));

// Task 2: Reverse an Array
// Write a function to reverse an array.
console.log(`===========Task 2============`)

let thirdTaskArray = ['Cat', 23, true, 'Monkey', null, false, 555]
function reverseAnArray(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let reverseArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray
}

console.log(reverseAnArray(thirdTaskArray));
console.log(secondTaskFunction(2));
console.log(secondTaskFunction([]));
console.log(secondTaskFunction(false));

// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
console.log(`===========Task 3============`)

let taskFourArray = [1, 4, 5, '4', 'too', false, null, undefined];
function searchIndex(array, index) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    if(array.length < index) {
        return -1
    } else {
        return array[index]
    }
}

console.log(searchIndex(taskFourArray, 3))
console.log(searchIndex(taskFourArray, 8))
console.log(searchIndex(taskFourArray, 15))
console.log(searchIndex(12, 15))

// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
console.log(`===========Task 4============`);
let taskFiveArray = [1, 4, 5, '4', 'too', false, null, undefined, 12, 44, 33, 55];
function checkParticularNumber(array, number) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    for(let i = 0; i < array.length - 1; i++)
    if(number === array[i]) {
        return console.log(`The number exists in this array!`)
    } 
}

checkParticularNumber(taskFiveArray, 12);
checkParticularNumber(taskFiveArray, 22);

// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.
console.log(`===========Task 5============`);

let taskSixArray = [1, 4, 5, 45, 8484, 224, 805, 235, 545];
function negateNumbersInArray(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let negativeNumArray = []
    for(let i = 0; i < array.length; i++) {
        negativeNumArray.push(-array[i])
    }
    return negativeNumArray
}

console.log(negateNumbersInArray(taskSixArray));

// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
console.log(`===========Task 6============`);

let taskSevenArray = [92, 500, 67, 45, 8484, 224, 805, 235, 545];
function diffBetween(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let maxNumber = Math.max(...array)
    let minNumber = Math.min(...array)
    let result = maxNumber - minNumber
    return result
}

console.log(diffBetween(taskSevenArray));

// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.
console.log(`===========Task 7============`);
let taskEightArray = [92, 500, 67, 45, 8484, 224, 805, 235, 545];

function multiplyByLenght(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let sum = 0
    for(let i = 0; i < array.length;i++) {
       sum = sum + (array[i] * array.length)
    }
    return sum
}

console.log(multiplyByLenght(taskEightArray));

// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, 
// and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

//***** decki jas ja razbiram zadacava deka treba na pr 7 skokovi na jumperot da se sporedat so 7 visini zadadeni za nekoj konkreten skok
//i da sporedime dali jumperot uspeal vo toj skok ili ne, pa taka ja resavam posto mn poednostavno mi izgledase deka ako na pr kiksne
//samo eden skok ondak ne uspeal vo site prepreki. Valjda dobro sum ja razbral
console.log(`===========Task 8============`);

let jumperJumpHeights = [205, 201, 203, 199, 206, 200, 202]
let hurdleHeights = [199,200,201,202,203,204,205]
function hasJumpedOrNot(array1, array2) {
    if(!Array.isArray(array1, array2) || !array1.length || !array2.length) {
        return 'Please enter Valid Arrays'
    }
    for(let i = 0; i < array1.length; i++) {
        if((array1[i]) >= array2[i] ) {
            console.log(`The Jumper has Passed ${[i]} jump`)
        } else {
            console.log(`The jumper has not passed ${[i]} jump`)
        }
    }

}

console.log(hasJumpedOrNot(jumperJumpHeights, hurdleHeights))

// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
console.log(`===========Task 9============`); 
function countdown(anyNumber) {
    if(typeof anyNumber !== 'number') {
        return 'Please enter valid number'
    } 
    let countdownArray = []
    for(i = anyNumber; i >= 0; i--) {
        countdownArray.push(i)
    } 
    return countdownArray
}

console.log(countdown(25));

// Task 10: Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
console.log(`===========Task 10============`); 

let oddEvenArray = [2,3,4,5,12,11,12,13,14,15,55,56,57,58,59,100,101,102]
function oddEvenPlusMinus(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if ((oddEvenArray[i] % 2) != 1) {
            newArray.push(oddEvenArray[i] - 1);      
        }
        else {
            newArray.push(oddEvenArray[i] + 1);
        }
    }
    return newArray
}

console.log(oddEvenPlusMinus(oddEvenArray))