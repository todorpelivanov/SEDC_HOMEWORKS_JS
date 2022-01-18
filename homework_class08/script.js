// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a 
// message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs
console.log(`------------Homework part 1------------`);

let animalName = document.getElementById('nameInput');
let animalKind = document.getElementById('animalKind');
let animalSaying = document.getElementById('sayingInput');
let button = document.getElementById('btn');

function createAnimalObject(animalName, animalKind){
    this.name = animalName;
    this.kind = animalKind;
    this.saying = function(speak) {
        console.log(`${this.name} says: '${speak}'`)
    }
}   

button.addEventListener('click', function() {
    let animal = new createAnimalObject(animalName.value, animalKind.value)
    animal.saying(animalSaying.value);
} )

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. 
// The object should have the next properties: title, author, readingStatus and a method 
// that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let theBookName = document.getElementById('bookTitleInput');
let theAuthorName = document.getElementById('authorInput');
let hasRead = document.getElementById('isReadTrue');
console.log(hasRead)
let submitButton = document.getElementById('btn2');

function createObject(bookName1, authorName1, hasRead1){
    this.bookName = bookName1;
    this.authorName = authorName1;
    this.readingStatus = hasRead1
    this.printReadStatus = function(readStatus) {
        if(hasRead.checked == true) {
            console.log(`Already read '${this.bookName}' by '${this.authorName}'`)
        } else {
            console.log(`You still need to read '${this.bookName}' by '${this.authorName}'`)
        }
    }
}

let bookInfo = new createObject(theBookName.value, theAuthorName.value, hasRead.value);

submitButton.addEventListener('click', function() {
    let bookInfo = new createObject(theBookName.value, theAuthorName.value, hasRead.value)
    bookInfo.printReadStatus(hasRead.value)
})




