let table = document.getElementById('table');
let peopleBtn = document.getElementById('peopleBtn');
let shipsBtn = document.getElementById('shipsBtn');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let loader = document.getElementById('loader');
let pagingBtns = document.getElementById('pagingButtonsContainer');

shipsBtn.addEventListener('click', executeGetShips);
peopleBtn.addEventListener('click', executeGetPeople);
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

let totalData = 0;
let pageCounter = 1;
let dataFlag = "";
let canFetch = true;

function renderPagingButtons(numberOfButtones) {
    pagingBtns.innerHTML = "";
    for (let i = 1; i <= numberOfButtones; i++) {
        pagingBtns.innerHTML += `<button id="pgn-btn-${i}" class="btn btn-warning">${i}</button>`;
    }

    for (let i = 1; i <= numberOfButtones; i++) {
        document.getElementById(`pgn-btn-${i}`).addEventListener("click", function() {
            if (dataFlag === "people") {
                getPeople(i);
            }
            if (dataFlag === "ships") {
                getShips(i);
            }
        })
    }
}

function nextPage() {
    if (canFetch) {
        if (dataFlag === "people") {
            if (pageCounter < Math.ceil(totalData / 10)) {
                pageCounter++;
                getPeople(0);
            }
        }
        if (dataFlag === "ships") {
            if (pageCounter < Math.ceil(totalData / 10)) {
                pageCounter++;
                getShips(0);
            }
        }
    }
}

function prevPage() {
    if (canFetch) {
        if (dataFlag === "people") {
            if (pageCounter > 1) {
                pageCounter--;
                getPeople(0);
            }
        }
        if (dataFlag === "ships") {
            if (pageCounter > 1) {
                pageCounter--;
                getShips(0);
            }
        }
    }
}

function executeGetPeople() {
    getPeople(0);
}

function executeGetShips() {
    getShips(0);
}

function getPeople(page) {
    if (dataFlag !== "people") {
        pageCounter = 1;
    }
    dataFlag = "people"

    if (page !== 0) {
        pageCounter = page;
    } 

    let peopleUrl = `https://swapi.dev/api/people/?page=${pageCounter}`;
    canFetch = false
    loader.style.display = "block"
    table.style.visibility = "hidden"
    fetch(peopleUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(people) {

        totalData = people.count;    
        
        table.innerText = "";
        personInfo(table, people.results);
        renderPagingButtons(Math.ceil(totalData / 10));

        if (people.next !== null) {
            nextBtn.style.visibility = 'visible';
        } else {
            nextBtn.style.visibility = 'hidden';
        }

        if (people.previous !== null) {
            prevBtn.style.visibility = 'visible';
        } else {
            prevBtn.style.visibility = 'hidden';
        }

        canFetch = true;
        loader.style.display = "none";
        table.style.visibility = "visible";
    })
    .catch(function(err) {
        console.log("The request has failed");
        console.log(err);
    })
}

function getShips(page) {
    if (dataFlag !== "ships") {
        pageCounter = 1
    }
    dataFlag = "ships";

    if (page !== 0) {
        pageCounter = page;
    } 

    let shipsUrl = `https://swapi.dev/api/starships/?page=${pageCounter}`;
    canFetch = false;
    loader.style.display = "block";
    table.style.visibility = "hidden";
    fetch(shipsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(ships) {

        totalData = ships.count;  
        let table = document.getElementById('table');
        table.innerText = "";
        shipInfo(table, ships.results);
        renderPagingButtons(Math.ceil(totalData / 10));

        if (ships.next !== null) {
            nextBtn.style.visibility = 'visible';
        } else {
            nextBtn.style.visibility = 'hidden';
        }

        if (ships.previous !== null) {
            prevBtn.style.visibility = 'visible';
        } else {
            prevBtn.style.visibility = 'hidden';
        }

        canFetch = true;
        loader.style.display = "none";
        table.style.visibility = "visible";
    })
    .catch(function(err) {
        console.log("The request has failed");
        console.log(err);
    })
}

function personInfo(element, data) {
    element.innerHTML += `<tr>
    <th>Name:</th>
    <th>Height:</th>
    <th>Mass:</th>
    <th>Gender:</th>
    <th>Birth Year:</th>
    <th>Appearances:</th>
    </tr>`
    for (let info of data) {
        element.innerHTML += `<tr>
        <td>${info.name}</td>
        <td>${info.height}</td>
        <td>${info.mass}</td>
        <td>${info.gender}</td>
        <td>${info.birth_year}</td>
        <td>${(info.films).length}</td>
        </tr>`
    }
}

function shipInfo(element, data) {
    element.innerHTML += `<tr>
    <th>Name:</th>
    <th>Model:</th>
    <th>Manufacturer:</th>
    <th>Cost:</th>
    <th>People Capacity:</th>
    <th>Class:</th>
    </tr>`
    for (let info of data) {
        element.innerHTML += `<tr>
        <td>${info.name}</td>
        <td>${info.model}</td>
        <td>${info.manufacturer}</td>
        <td>${info.cost_in_credits}</td>
        <td>${info.passengers}</td>
        <td>${info.starship_class}</td>
        </tr>`
    }
}


