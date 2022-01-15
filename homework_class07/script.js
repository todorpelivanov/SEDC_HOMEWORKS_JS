console.log('test')

// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let colInput = document.getElementById('colInput');
let rowInput = document.getElementById('rowInput');
let button = document.getElementById('Btn');
let styleBtn = document.getElementById('changeTableStyle')
let mainTable = document.getElementById('mainTable');

function createTable(rows, cols) {
    if(isNaN(rows) || isNaN(cols)) {
        mainTable.innerHTML = '';
        return alert(`Please enter valid number`)
    }
    mainTable.innerHTML = '';
    for (let i = 1; i <= rows; i++) {
         mainTable.innerHTML += `<tr id="row${i}"></tr>`
         mainTable.style.backgroundColor = 'yellow';
         let newRow = document.getElementById(`row${i}`);
        for (let j = 1; j <= cols; j++) {
            newRow.innerHTML += `<td id="data${j}">row-${i} Column-${j}</td>`
            newRow.style.fontSize = "15px";
            newRow.style.backgroundColor = 'red';
            newRow.style.color = 'white';
            newRow.style.borderWidth = "5px"
            newRow.style.borderStyle = "solid"
            newRow.style.borderColor = 'black'
        }
    }
}

button.addEventListener('click', function() {
    let inputcolumn = colInput.value;
    let inputRow = rowInput.value;
    tableCreate = createTable(inputRow, inputcolumn); 
    colInput.value = '';
    rowInput.value = '';
    
})

//little extra fun by me :)
styleBtn.addEventListener('mouseover', function() {
    mainTable.style.backgroundColor = 'orange';
    mainTable.style.borderWidth = "3px"
    mainTable.style.borderStyle = "solid"
    let stylerow1 = document.querySelectorAll('td')
    for(let i = 0; i < stylerow1.length; i++) {
        stylerow1[i].style.backgroundColor = 'green';
        stylerow1[i].style.borderWidth = "3px"
        stylerow1[i].style.borderStyle = "solid"
        stylerow1[i].style.fontSize = "20px"
    }
})

// solved this without google btw!:)

