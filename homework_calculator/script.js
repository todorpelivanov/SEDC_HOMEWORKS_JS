let showResult = document.getElementById("upperPart2");
let saveResult = document.getElementById("upperPart1-2");
let equasion = document.getElementById("upperPart1-3");
let add = document.getElementById(`add`);
let sustract = document.getElementById(`sustract`);
let multiply = document.getElementById(`multiply`);
let divide = document.getElementById(`divide`);
let backspace = document.getElementById(`bck`);
let hardReset = document.getElementById(`hardReset`);
let reset = document.getElementById(`reset`);
let percentage = document.getElementById(`percentage`);
let negate = document.getElementById(`negate`);
let numOne = document.getElementById(`numberOne`);
let numTwo = document.getElementById(`numberTwo`);
let numThree = document.getElementById(`numberThree`);
let calcResult = document.getElementById(`calcResult`);
let numFour = document.getElementById(`numberFour`);
let numFive = document.getElementById(`numberFive`);
let numSix = document.getElementById(`numberSix`);
let dot = document.getElementById(`dot`);
let numSeven = document.getElementById(`numberSeven`);
let numEight = document.getElementById(`numberEight`);
let numNine = document.getElementById(`numberNine`);
let numZero = document.getElementById(`numberZero`);
let changeTheme = document.getElementById(`changeTheme`);
let allButtons = document.querySelectorAll(`.allButtons`);
let sum = 0;
let previousEvent = "";

numOne.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 1);
   } else {
      return (showResult.innerText = showResult.innerText + 1);
   }
});

numTwo.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 2);
   } else {
      return (showResult.innerText = showResult.innerText + 2);
   }
});

numThree.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 3);
   } else {
      return (showResult.innerText = showResult.innerText + 3);
   }
});

numFour.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 4);
   } else {
      return (showResult.innerText = showResult.innerText + 4);
   }
});

numFive.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 5);
   } else {
      return (showResult.innerText = showResult.innerText + 5);
   }
});

numSix.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 6);
   } else {
      return (showResult.innerText = showResult.innerText + 6);
   }
});

numSeven.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 7);
   } else {
      return (showResult.innerText = showResult.innerText + 7);
   }
});

numEight.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 8);
   } else {
      return (showResult.innerText = showResult.innerText + 8);
   }
});

numNine.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 9);
   } else {
      return (showResult.innerText = showResult.innerText + 9);
   }
});

numZero.addEventListener("click", function () {
   if (showResult.textContent === "0") {
      return (showResult.innerText = 0);
   } else {
      return (showResult.innerText = showResult.innerText + 0);
   }
});

dot.addEventListener("click", function () {
   let helper = [showResult.innerText];
   let helper2 = ".";
   if (!helper[0].includes(helper2)) {
      return (showResult.innerText = showResult.innerText + ".");
   }
});

hardReset.addEventListener("click", function () {
   sum = 0;
   saveResult.innerText = sum;
   previousEvent = "";
   equasion.innerText = '';
   return (showResult.innerText = 0);
});

reset.addEventListener("click", function () {
   return (showResult.innerText = 0);
});

negate.addEventListener("click", function () {
   let dot = ".";
   if (showResult.innerText === "") {
      return;
   } else {
      if (!showResult.innerText.includes(dot)) {
         showResult.innerText *= -1;
      } else {
         let helper = showResult.innerText;
         console.log(helper);
         let helper2 = "." + helper.split(".").pop();
         console.log(helper2);
         return (showResult.innerText =
            parseInt(showResult.innerText) * -1 + helper2);
      }
   }
});

backspace.addEventListener("click", function () {
   let helper = showResult.innerText;
   if (showResult.textContent !== "0" || showResult.textContent == "") {
      return (showResult.innerText = helper.slice(0, -1));
   }
});

add.addEventListener("click", function () {
   previousEvent = "+";
   if (showResult.innerText === "") {
      return;
   } else {
      if (saveResult.innerText === "0" && equasion.innerText === '') {
         saveResult.innerText = showResult.innerText;
         sum = saveResult.innerText;
         showResult.innerText = 0;
         equasion.innerText += saveResult.innerText;
      } else {
         let helper = parseFloat(showResult.innerText);
         let helper2 = sum;
         sum = parseFloat(helper2) + parseFloat(helper);
         showResult.innerText = sum;
         equasion.innerText += ' + ' + helper;
         showResult.innerText = "";
         saveResult.innerText = sum;
      }
   }
});

sustract.addEventListener("click", function () {
   previousEvent = "-";
   if (showResult.innerText === "") {
      return;
   } else {
      if (saveResult.innerText === "0" && equasion.innerText === '') {
         saveResult.innerText = showResult.innerText;
         sum = saveResult.innerText;
         showResult.innerText = 0;
         equasion.innerText += saveResult.innerText;
      } else {
         let helper = parseFloat(showResult.innerText);
         let helper2 = sum;
         equasion.innerText += ' - ' + helper;
         sum = helper2 - helper;
         showResult.innerText = sum;
         showResult.innerText = "";
         saveResult.innerText = sum;
      }
   }
});

multiply.addEventListener("click", function () {
   previousEvent = "*";
   if (showResult.innerText === "") {
      return;
   } else {
      if (saveResult.innerText === "0" && equasion.innerText === '') {
         saveResult.innerText = showResult.innerText;
         sum = saveResult.innerText;
         showResult.innerText = 0;
         equasion.innerText += saveResult.innerText;
      } else {
         let helper = parseFloat(showResult.innerText);
         let multiplyResult = parseFloat(sum) * helper;
         sum = multiplyResult;
         equasion.innerText += ' * ' + helper;
         showResult.innerText = sum;
         showResult.innerText = "";
         saveResult.innerText = multiplyResult;
      }
   }
});

divide.addEventListener("click", function () {
   previousEvent = "/";
   if (showResult.innerText === "") {
      return;
   } else {
      if (saveResult.innerText === "0" && equasion.innerText === '') {
         saveResult.innerText = showResult.innerText;
         sum = saveResult.innerText;
         showResult.innerText = 0;
         equasion.innerText += saveResult.innerText;
      } else {
         let helper = parseFloat(showResult.innerText);
         let multiplyResult = parseFloat(sum) / parseFloat(helper);
         sum = multiplyResult;
         equasion.innerText += ' / ' + helper;
         showResult.innerText = sum;
         showResult.innerText = "";
         saveResult.innerText = multiplyResult;
      }
   }
});

calcResult.addEventListener("click", function () {
   if (previousEvent === "+") {
      saveResult.innerText = parseFloat(sum) + parseFloat(showResult.innerText);
      equasion.innerText += ' + ' + showResult.innerText + ' = ' + saveResult.innerText; 
      showResult.innerText = 0;
      sum = parseFloat(saveResult.innerText);
   } else if (previousEvent === "-") {
      saveResult.innerText = parseFloat(sum) - parseFloat(showResult.innerText);
      equasion.innerText += ' - ' + showResult.innerText + ' = ' + saveResult.innerText;
      showResult.innerText = 0;
      sum = parseFloat(saveResult.innerText);
   } else if (previousEvent === "*") {
      saveResult.innerText = parseFloat(sum) * parseFloat(showResult.innerText);
      equasion.innerText += ' * ' + showResult.innerText + ' = ' + saveResult.innerText;
      showResult.innerText = 0;
      sum = parseFloat(saveResult.innerText);
   } else if (previousEvent === "/") {
      saveResult.innerText = parseFloat(sum) / parseFloat(showResult.innerText);
      equasion.innerText += ' / ' + showResult.innerText + ' = ' + saveResult.innerText;
      showResult.innerText = 0;
      sum = parseFloat(saveResult.innerText);
   }
});

let changeCalcTheme = true;
changeTheme.addEventListener('click', function() {
   if(changeCalcTheme === true) {
      changeCalcTheme = false;
      for (let button of allButtons) {
         button.style.color = 'red';
         button.style.backgroundColor = 'darkGreen';
      }
      showResult.style.backgroundColor = 'green';
      showResult.style.color = 'yellow'
      saveResult.style.backgroundColor = 'yellow';
      saveResult.style.color = 'green';
      equasion.style.backgroundColor = 'darkGreen';
      equasion.style.color = 'yellow';
   } else {
      changeCalcTheme = true;
      for (let button of allButtons) {
         button.style.color = 'white';
         button.style.backgroundColor = 'black';
      }
      showResult.style.backgroundColor = 'black';
      showResult.style.color = 'white'
      saveResult.style.backgroundColor = 'black';
      saveResult.style.color = 'white';
      equasion.style.backgroundColor = 'black';
      equasion.style.color = 'white';
   }
});