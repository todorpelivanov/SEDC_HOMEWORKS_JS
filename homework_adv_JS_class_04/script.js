//Homework 1 Task 1
//Create an html page with a table and a button. 
//When the button is clicked show results for the first 10 planets from the Star Wars api. 
//The information in the table are: Planet Name Population Climate Gravity
//There should be a function that makes the call to the api for the planets(should have URL for a parameter) 
//There should be a function that prints planets in to the table 
//API URL: ** https://swapi.dev/api/planets/?page=1
//Task 2
//After the user clicks the button to get the first 10 planets, 
//a button should be shown below the table that says: 
//NEXT 10. When the button is clicked you should make another call and get the next 10 planets 
//and change the table contents with information about the next 10 planets. 
//After the next 10 planets are shown the button NEXT 10 should disapear and a new button 
//PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table 
//and hide the PREVIOUS 10 button and show the NEXT 10 button.
//API URL: ** https://swapi.dev/api/planets/?page=2

function planetInfo(element, planets) {
    element.innerHTML += `<th>
    <tr>
    <td>Planet Name:</td>
    <td>Planet population:</td>
    <td>Planet Climate:</td>
    <td>Planet Gravity:</td>
    </tr>
    </th>`
    for (let planet of planets) {
        element.innerHTML += `<tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        </tr>`
    }
}

function getPlanets(planets) {
    let peopleUrl = planets;
    fetch(peopleUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(planets) {
        console.log("The request succeded");
        console.log(planets);
        document.getElementById('table').innerText = '';
        let table = document.getElementById('table');
        planetInfo(table, planets.results)
    })
    .catch(function(err) {
        console.log("The request has failed");
        console.log(err)
    })
}

document.getElementById('resultBtn')
.addEventListener('click', function() {
    getPlanets("https://swapi.dev/api/planets/?page=1");
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('resultBtn').style.display = 'none';
});

nextBtn.addEventListener('click', function() {
    getPlanets("https://swapi.dev/api/planets/?page=2");
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('previousBtn').style.display = 'block';

});

previousBtn.addEventListener('click', function() {
    getPlanets("https://swapi.dev/api/planets/?page=1");
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('previousBtn').style.display = 'none';
});
