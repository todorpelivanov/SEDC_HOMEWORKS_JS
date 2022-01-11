console.log('test')
// Homework part 1
//Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed
console.log(`=============Homework part one==============`)
let paraChange = document.querySelectorAll("p");
console.log(paraChange);
let hOneChange = document.querySelectorAll("h1");
console.log(hOneChange);
let hThreeChange = document.querySelectorAll("h3");
console.log(hThreeChange);
function changeText(paragraphs, h1s, h3s) {
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = 'Every <p> content changed at once!';
    }
    for(let j = 0; j< h1s.length; j++) {
        h1s[j].innerText = 'Every <h1> content changed at once!';
    }
    for(let r = 0; r <= h3s.length - 1; r++) {
        h3s[r].innerText = 'Every <h3> content changed at once!';
    }
}

changeText(paraChange, hOneChange, hThreeChange);

// homework part 2
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
//----------------------------------------------------------------moj komment-----
// jas vo ist html file zaedno so prethodnata zadaca ja napraviv i ovaa zadaca da ne spamame fajlovi :)
// a i polesno ke vi bide na vas za pregleduvanje
// ja napraviv malce poslozena, ali mislam deka so site validacii sto mi teknaa i skroz genericka e,
// ama cekam na feedbackot dali e se vo red vaka 

let numArray = [12, 55, 21, 6, 8];
let testArray1 = [];
let testArray2 = [2, 5, 'too', false];
let myAddedList = document.querySelector("#listOne");
let theSumResult = document.querySelector("#resultDiv");

    function AddPrintAndSum(inputArray) {
        if(!Array.isArray(inputArray) || !inputArray.length) {
            return console.log('Please enter Valid Array')
            //return alert('Please enter Valid Array')
        }
        for(let arr1 of inputArray) {
            if(typeof arr1 !== 'number') {
            return console.log('Please enter Array with only valid numbers')
            //return alert('Please enter Array with only valid numbers')
            }
        }
        let sum = 0
        for(let arr = 0; arr < inputArray.length; arr++) {
            myAddedList.innerHTML += `<li>${inputArray[arr]}</li>`
            sum += inputArray[arr]
            if(arr < inputArray.length - 1) {
                theSumResult.innerText += ` ${inputArray[arr]} + `
            }
            if(arr === inputArray.length - 1) {
                theSumResult.innerText += ` ${inputArray[arr]} =  ${sum}`
            }

        }
        myAddedList.innerHTML += `<li>"The sum of all the numbers is ${sum}"</li>`
    }

    AddPrintAndSum(numArray);
    //AddPrintAndSum(testArray1);
    //AddPrintAndSum(testArray2);


//homework part 3
// Create a recipe page from inputs or from prompt
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let theMainBody = document.querySelector("body");
function recipeMaker(recipeName) {
    let nameOfRecipe = prompt('Pls write the name of the recipe');
    if(typeof nameOfRecipe !== 'string' || nameOfRecipe.length === 0) {
        return alert('Please enter Valid name with letters only')
    }
    theMainBody.innerHTML += `<div id="recipeDiv">Name of the  meal recipe: ${nameOfRecipe}</div>`
    // ovde tabelata
    // theMainBody.innerHTML += `<div id="tableDiv">Table</div>`
    // let mainTable = document.querySelector("#tableDiv");
    // console.log(mainTable)
    // mainTable.innerHTML += `<tr id="mainRow"></tr>`
    // let mainRow = document.querySelector("#mainRow");
    // console.log(mainRow)
    // mainRow.innerHTML += `<td id="mainData">the table</td>`
    // let mainTd = document.querySelector("#mainData");
    // console.log(mainTd)
    let recipe = document.getElementById("recipeDiv");
    let NumOfIngredients = parseInt(prompt('Pls write how many ingredients the recipe needs'));
    if(isNaN(NumOfIngredients)) {
        return alert('Please enter valid number')
        }
    for(let i = 0; i < NumOfIngredients; i++) {
        let nameOfIngridients = prompt('Pls write the name of every ingridient');
        recipe.innerHTML += `<ul>Ingridient${([i + 1])}: ${nameOfIngridients}</ul>`
    }
}

recipeMaker();
