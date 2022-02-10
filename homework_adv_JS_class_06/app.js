// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3 -------showResult1--------
// All female student names with an average grade of 5 -------showResult2--------
// All male student full names who live in Skopje and are over 18 years old -------showResult3--------
// The average grades of all female students over the age of 24 -------showResult4--------
// All male students with a name starting with B and average grade over 2 -------showResult5--------
// Use higher order functions to find the answers 
// Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
console.log(`========Homework========`)

let getDataBtn = document.getElementById("getDataFromApi");
getDataBtn.addEventListener("click", getData);

function getData() {
    let data = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
    fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log("The request secceeded!")
        showResult1(response); 
        showResult2(response); 
        showResult3(response); 
        showResult4(response);
        showResult5(response);
    })
    .catch(function(err) {
        console.log("The request has failed!");
        console.log(err);
    })
}

function showResult1(api) {
    console.log(`---------all students with an average grade higher than 3-----------`)
    let filteredArray = api.filter(x => x.averageGrade > 3)
    console.log(filteredArray);
    return filteredArray;
}

function showResult2(api) {
    console.log(`---------female student names with an average grade of 5-----------`)
    let filteredArray = api.filter(x => x.averageGrade === 5 && x.gender === 'Female')
    .map(x => x.firstName);
    console.log(filteredArray);
    return filteredArray;
}

function showResult3(api) {
    console.log(`---------male student full names who live in Skopje and are over 18 years old-----------`)
    let filteredArray = api.filter(x => x.age > 18 && x.city === 'Skopje' && x.gender === 'Male')
    .map(x => `${x.firstName} ${x.lastName}`);
    console.log(filteredArray);
    return filteredArray;
}

function showResult4(api) {
    console.log(`---------average grades of all female students over the age of 24-----------`)
    let filteredArray = api.filter(x => x.age > 24 && x.gender === 'Female')
    .map(x => `${x.averageGrade}`);
    console.log(filteredArray);
    return filteredArray;
}

function showResult5(api) {
    console.log(`---------male students with a name starting with B and average grade over 2-----------`)
    let filteredArray = api.filter(x => x.firstName.startsWith('B') && x.gender === 'Male');
    console.log(filteredArray);
    return filteredArray;
}


