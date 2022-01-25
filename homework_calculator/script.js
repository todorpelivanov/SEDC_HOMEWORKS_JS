let showResult = document.getElementById('upperPart2');
console.log(showResult.textContent)
let add = document.getElementById(`add`);
let sustract = document.getElementById(`sustract`);
let multiply = document.getElementById(`multiply`);
let divide = document.getElementById(`divide`);
let backspace = document.getElementById(`bck`);
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

 numOne.addEventListener('click', function() {
if(showResult.textContent === '0') {
   return showResult.innerText = 1
} else {
   return showResult.innerText = showResult.innerText + 1 
}
})

 numTwo.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 2
   } else {
      return showResult.innerText = showResult.innerText + 2 
   }})

numThree.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 3
   } else {
      return showResult.innerText = showResult.innerText + 3 
   }})

numFour.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 4
   } else {
      return showResult.innerText = showResult.innerText + 4 
   }})

numFive.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 5
   } else {
      return showResult.innerText = showResult.innerText + 5 
   }})

numSix.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 6
   } else {
      return showResult.innerText = showResult.innerText + 6 
   }})

numSeven.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 7
   } else {
      return showResult.innerText = showResult.innerText + 7 
   }})

numEight.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 8
   } else {
      return showResult.innerText = showResult.innerText + 8 
   }})

numNine.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 9
   } else {
      return showResult.innerText = showResult.innerText + 9 
   }})

numZero.addEventListener('click', function() {
   if(showResult.textContent === '0') {
      return showResult.innerText = 0
   } else {
      return showResult.innerText = showResult.innerText + 0 
   }})

dot.addEventListener('click', function() {
   let helper = [showResult.innerText];
   let helper2 = '.'
   if(!helper[0].includes(helper2)) {
      return showResult.innerText = showResult.innerText + '.'
   }
})

reset.addEventListener('click', function() {
   return showResult.innerText = 0
})

negate.addEventListener('click', function() {
   return showResult.innerText = parseInt(showResult.innerText) * -1
})

backspace.addEventListener('click', function() {
   let helper = showResult.innerText
   if(showResult.textContent !== '0' || showResult.textContent == '') {
      return showResult.innerText = helper.slice(0, -1)
   }
})