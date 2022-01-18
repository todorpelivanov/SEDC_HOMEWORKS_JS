// HOMEWORK PART 1
// CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!
// You must use JQuery to complete the task


$(document).ready(function () {
    let greetInput = $("#input1");
    let button1 = $("#button1");

    button1.click(function () {
        let inputValue = greetInput[0].value;
        return $("#button1").first().after(`<h1> Hello there ${inputValue}</h1>`);
    })

    // HOMEWORK PART 2
    // Create a header generator
    // Create two inputs, one for text and one for color
    // Create a button that says: generate h1
    // Create an h3 element for messages
    // When the button is clicked create a new header below the inputs and button
    // The new header should have the text and color from the inputs
    // If the person enters an invalid color or an empty text show an error message to the message element
    // You must use JQuery to complete the task

    let textInput = $(`#textInput`);
    let colorInput = $(`#colorInput`);
    let generatorBtn = $(`#buttonGenerator`);

    let isEmptyInput = function(input) {
        if (input == "") {
            return false 
            //alert(`Please Enter value in the text field`)
        }
    }

    let isColor = function(colorName) {
        let s = new Option().style;
        s.color = colorName;
        if ((s.color == colorName) == false) {
            return false;
        }
    }

    generatorBtn.click(function() {
        if (isEmptyInput(textInput[0].value) === false ) {
             return alert(`Please Enter value in the text field`)
        } else if (isEmptyInput(colorInput[0].value) === false) {
            alert(`Please Enter value in the color field`) 
        } else if (isColor(colorInput[0].value) === false) {
            alert(`Please Enter propper color name in its field`) 
        } else {
            $("#buttonGenerator").first().after(`<h1 id="colorGeneratedText" style="color:${colorInput[0].value}">${textInput[0].value}</h1>.`)
        }
    })
})


