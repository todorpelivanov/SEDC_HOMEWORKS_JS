console.log(`===========homework Class 04 AND Class 05===========`);

console.log(`===========Homework part 1===========`)

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

console.log(`===========Homework part 2===========`);

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

console.log(`===========BONUS-Homework part 2-BONUS===========`);
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
// Write a JavaScript program to read ten array values, determine the largest value, and print it
console.log(`===========Homework part 3===========`);
let tenValueArray = [5, 19, 6, 34, 21, 7, 16, 26, 10, 35]

for (let i = 0;  i <= tenValueArray.length - 1; i++) {
    if(Math.max(...tenValueArray) != tenValueArray[i]) continue;
    console.log(`The biggest number is ${tenValueArray[i]}`)
}

// i ova go najdov kako resenie ama so gotova funkcija ama nadvor od loopot pa mislam deka
// resenieto sto go barate treba da e gornoto za koe mi trebase mn poveke zamaranje od ova dole :)
// console.log(Math.max(...tenValueArray)); 

//------------------HOMEWORK PART 4-----------------------
// Write a JavaScript program that will read in a number and write out its digits
console.log(`===========Homework part 4===========`);

function splitTheNumber(anyNumber) {
    if(typeof anyNumber !== 'number') {
        return 'Please enter valid number'
    }
    let splittedNumbers = [];
    let splitNumber = anyNumber.toString(); 
    for (let i = 0; i < splitNumber.length; i += 1) {
        splittedNumbers.push(+splitNumber.charAt(i));
    }
    return splittedNumbers
}

console.log(splitTheNumber(123456));
console.log(splitTheNumber('123456'));
console.log(splitTheNumber(592923656384));

//------------------HOMEWORK PART 5-----------------------
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"
console.log(`===========Homework part 5===========`);

let storyString = ['Are', 'you', 'a', 'star', 'wars', 'fan', '?'];
let storyString2 = ['Hey', 'There', 'big', 'fella'];
let storyString3 = [12, 'Are', 'you', 'a', 'star', 'wars', 'fan', '?']
let emptyArray = []

function makeStoryFromArray(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array with only strings'
    }
    let outputStory = [];
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] !== 'string') {
            return 'Please enter valid string'
        }
        outputStory.push(array[i])
    }
    return outputStory.join(' ')
}

console.log(makeStoryFromArray(storyString));
console.log(makeStoryFromArray(storyString3));
console.log(makeStoryFromArray(emptyArray));

//------------------HOMEWORK PART 6-----------------------
// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.
console.log(`===========Homework part 6===========`);
//neznam dali dobro ja razbrav zadacava, dali ova se barase

    for(let i = 1; i <= 20; i++) {
    if((i % 2) != 1) {
        console.log(i)
        console.log(`\n`)
    } else {
        console.log(i + " ")
    }
    }

//------------------HOMEWORK PART 7-----------------------
// Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it
console.log(`===========Homework part 7===========`);

let firstArray = [23, 51, 11, 12, 83, 37, 54, 77];
let diffValueArray = [55, 44, 33, 22, 15, 'Hello']

function numbersOnly(value) {
    if (typeof (value) === 'number') {
        return value;
    }
}

function sumOfMinMax(array) {
    if(!Array.isArray(array) || !array.length) {
        return 'Please enter Valid Array'
    }
    let onlyNumbersArray = array.filter(numbersOnly) //*****BONUSOT
    let result = Math.max(...onlyNumbersArray) + Math.min(...onlyNumbersArray)
    return result
}

console.log(sumOfMinMax(firstArray));
console.log(sumOfMinMax(diffValueArray));

//------------------HOMEWORK PART 8-----------------------
// Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
console.log(`===========Homework part 8===========`);


let firstNamesArray = ['Tom', 'Mathew', 'Lea', 'Sandra'];
let lastNamesArray = ['Armstrong', 'Dillan', 'Smith', 'Doe'];

function gettingNamesTogether(array1, array2) {
    if(!Array.isArray(array1) || !array1.length || !Array.isArray(array2) || !array2.length) {
        return 'Please enter Valid Array'
    }
    let resultArray = [];
    for(i = 0; i < array1.length; i++) {
        resultArray.push([i + 1] + '.' + array1[i] + ' ' + array2[i])
    }

    return resultArray
}

console.log(gettingNamesTogether(firstNamesArray, lastNamesArray));

