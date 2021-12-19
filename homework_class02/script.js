//Write javascript code that will calculate which Chinese Zodiac a given year is in.
//Formula for Chinese Zodiac caluclation: (year - 4) % 12
//Possible values:
//0 - Rat
//1 - Ox
//2 - Tiger
//3 - Rabbit
//4 - Dragon
//5 - Snake
//6 - Horse
//7 - Goat
//8 - Monkey
//9 - Rooster
//10 - Dog
//11 - Pig

let enterYear = prompt("Please enter year and find out your chinese zodiac sign!");
let yearWithNumber = parseInt(enterYear);
let result = (enterYear - 4) % 12;
console.log(typeof(result));
console.log(result);

    if (result === 0) {
        alert("Your chinese zodiac sign is Rat");
    } else if(result === 1) {
        alert("Your chinese zodiac sign is Ox");
    } else if(result === 2) {
        alert("Your chinese zodiac sign is Tiger");
    } else if(result === 3) {
        alert("Your chinese zodiac sign is Rabbit");
    } else if(result === 4) {
        alert("Your chinese zodiac sign is Dragon");
    } else if(result === 5) {
        alert("Your chinese zodiac sign is Snake");
    } else if(result === 6) {
        alert("Your chinese zodiac sign is Horse");
    } else if(result === 7) {
        alert("Your chinese zodiac sign is Goat");
    } else if(result === 8) {
        alert("Your chinese zodiac sign is Monkey");
    } else if(result === 9) {
        alert("Your chinese zodiac sign is Rooster");
    } else if(result === 10) {
        alert("Your chinese zodiac sign is Dog");
    } else if(result === 11) {
        alert("Your chinese zodiac sign is Pig");
    } else {
        alert("Please enter the correct year with numbers");
    }

    // bujrum resenie i so switch, gi cepnav i ovie po net pa moguce resenie i vakvo napraviv se probav iako ne ni se predadeni
    // ke raboti i vaka

// switch (result) {
// case result = 0:
// alert("Your chinese zodiac sign is Rat");
// break;
// case 1:
//     alert("Your chinese zodiac sign is Ox");
// break;
// case 2:
//     alert("Your chinese zodiac sign is Tiger");
// break;
// case 3:
//     alert("Your chinese zodiac sign is Rabbit");
// break;
// case 4:
//     alert("Your chinese zodiac sign is Dragon");
// break;
// case 5:
//     alert("Your chinese zodiac sign is Snake");
// break;
// case 6:
//     alert("Your chinese zodiac sign is Horse");
// break;
// case 7:
//     alert("Your chinese zodiac sign is Goat");
// break;
// case 8:
//     alert("Your chinese zodiac sign is Monkey");
// break;
// case 9:
//     alert("Your chinese zodiac sign is Rooster");
// break;
// case 10:
//     alert("Your chinese zodiac sign is Dog");
// break;
// case 11:
//     alert("Your chinese zodiac sign is Pig");
// break;
// default:
//     alert("Please enter the correct year with numbers")
// }