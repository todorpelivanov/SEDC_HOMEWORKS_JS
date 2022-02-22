// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: 

//Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// let students = ['Petko Petkov', 'Stanko Stankov', 'Goce Delcev', 'Trajan Popov', 'Ana Ovska', 'Ivana Onska', 'Lea Omska'];
// let subjects = ['HTML', 'CSS', 'JS', 'Adv.JS', 'Angular', 'React'];

// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property
//  but only if the student has an Academy object in the Academy property and that subject exists in the academy.
//  If not, give error in console and do not set the CurrentSubject property

//  Exercise 2
//  Make the functions StartAcademy and StartSubject dynamic.
//  StartAcademy - When the student calls StartAcademy, 
//  the student should also be added to the Academy property Students ( The academy that he is starting )
//  StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students 
//  ( The subject that he is starting ). 
//  If there was another subject in the CurrentSubject property, 
//  that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(name, start, end) {
    this.Name = name;
    this.Students = ['Petko Petkov', 'Stanko Stankov', 'Goce Delcev', 'Trajan Popov', 'Ana Ovska', 'Ivana Onska', 'Lea Omska'];
    this.Subjects = ['HTML', 'CSS', 'JS', 'Adv.JS', 'Angular', 'React']
    this.Start = start;
    this.End = end;
    this.NumberOfClasses = parseInt(this.Subjects.length * 10);
    this.printStudents = function() {
        console.log(this.Students)
    };
    this.printSubjects = function() {
        console.log(this.Subjects)
    };
}

let academy = new Academy('Coding Academy', '01.11.2021', '30.10.2022')
console.log(academy);
academy.printStudents();
academy.printSubjects();

function Subject(title, isElective, academy, ) {
    this.title = title;
    this.NumberOfClasses = 10;
    this.isElective = isElective;
    this.Academy = academy;
    this.Students = ['Petko Petkov', 'Stanko Stankov', 'Goce Delcev', 'Trajan Popov', 'Ana Ovska', 'Ivana Onska', 'Lea Omska'];;
    this.overrideClasses = function(number) {
        this.NumberOfClasses = number;
    }
}

let subject = new Subject('JavaScript', true, academy);
console.log(subject);
subject.overrideClasses(5)

function Student(name, surname, age) {
    this.Name = name;
    this.Surname = surname;
    this.Age = age;
    this.CompletedSubjects = [];
    this.Academy = null;
    this.CurrentSubject = 0;
    this.startAcademy = function(academy) {
    this.Academy = academy;
         academy.Students.push(`${this.Name} ${this.Surname}`) 
    }
    this.StartSubject = function(inputSubject) {
        if(typeof this.Academy === 'object' && this.Academy.Subjects.includes(inputSubject)) {
            if(this.CurrentSubject !== 0) {
            this.CompletedSubjects.push(this.CurrentSubject.title)
            subject.title = inputSubject
            this.CurrentSubject = subject;
            } else {
            subject.title = inputSubject
            this.CurrentSubject = subject;
            subject.Students.push(`${this.Name} ${this.Surname}`)
        }
        } else {
            this.CurrentSubject = 0;
            console.log('Error! no such subject')
        }
    }
}

let student = new Student('John', 'Stockton', 33);
let student2 = new Student('Michael', 'Jordan', 23);
// console.log(student);
student.startAcademy(academy);
student.StartSubject("HTML");
//student.StartSubject("Math"); // kao za checkce deka nema da raboti
student.StartSubject("CSS");
student.StartSubject("JS");
console.log(student);

// decki ja napraviv zadacava so baranjata kako sto gi razbrav, a toa e da bidat dinamicni samo baranjata od ex.2, iako postoese moznost
// da bide cela zadaca dinamicna u stil kao da se dodavaat novi predmeti vo akademijata kako objekti, so svoi studenti itn.
// ali bitno valjda zadacava e samo da izvezbame pristapuvanje do propertinja na objekt i dodavanje po nesto novo :)
// jas mislev recimo da napravam 3 akademii so po 5-6 predmeti, 20 studenti, i site tie da gi napravam so objekt templatite,
// pa so metodite da si povikam koj predmet vo koja akademija ke bide, samo push vo nizata na predmeti, isto i za studentite 
// vo vrska so akademiite i predmetite. I toa ke bese lesno, nisto tesko samo mn poise kod za kucanje i repeticii :)