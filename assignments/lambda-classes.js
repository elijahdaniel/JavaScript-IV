class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are leaning about ${subject}`
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }

    listsSubjects() {
        return `Favorite Subjects: ${this.favSubject} `
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this. favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        return `${this.name}  announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

// --- Tests ---

// Person
const calvin = new Person({
    name: 'Calvin',
    age: 28,
    location: 'Milpitas, CA',
})

console.log(calvin);
console.log(calvin.speak());

// Instructors
const jack = new Instructor({
    name: 'Jack',
    age: 53,
    location: 'Dimension C-132',
    specialty: 'ES5',
    favLanguage: 'Javascript',
    catchPhrase: 'Wubbalubbadubdub!'
})

console.log(jack);
console.log(jack.demo('ES5'));
console.log(jack.grade('Bob', 'ES5'));

const jill = new Instructor({
    name: 'Jill',
    age: 43,
    location: 'San Francisco, CA',
    specialty: 'LESS',
    favLanguage: 'CSS',
    catchPhrase: 'Talk is cheap, show me the code!'
})

console.log(jill);
console.log(jill.demo('LESS'));
console.log(jill.grade('Morty', 'LESS'));

const anna = new Instructor({
    name: 'Anna',
    age: 25,
    location: 'San Francisco, CA',
    specialty: 'HTML',
    favLanguage: 'Ruby',
    catchPhrase: 'Truth can only be found in one place: The code.'
})

console.log(jill);
console.log(jill.demo('HTML'));
console.log(jill.grade('Mary', 'HTML'));



// Students
const bob = new Student({
    name: 'Bob',
    age: 24,
    location: 'San Jose, CA',
    previousBackground: 'Construction Worker',
    className: 'WEBPT7',
    favSubject: ['HTML', 'Javascript', 'Ruby']
});

console.log(bob);
console.log(bob.listsSubjects());
console.log(bob.PRAssignment('Javascript'));
console.log(bob.sprintChallenge('HTML'))

const morty = new Student({
    name: 'Morty',
    age: 18,
    location: 'Dimension C-132',
    previousBackground: 'Art Student',
    className: 'WEB20',
    favSubject: ['Redux', 'C#', 'CSS']
});

console.log(morty)
console.log(morty.listsSubjects())
console.log(morty.PRAssignment('Redux'));
console.log(morty.sprintChallenge('C#'));

const mary = new Student({
    name: 'Mary',
    age: 29,
    location: 'San Jose, Ca',
    previousBackground: 'Restaurant Host',
    className: 'CS8',
    favSubject: ['C++', 'Python', 'Javascript']
});

console.log(mary);
console.log(mary.listsSubjects());
console.log(mary.PRAssignment('Python'));
console.log(mary.sprintChallenge('Advanced CSS'))

// Project Managers
const david = new ProjectManagers({
    name: 'David',
    age: 34,
    location: 'Irvine, CA',
    specialty: 'Nodejs',
    favLanguage: 'Javascript',
    catchPhrase: 'No rain, no flowers.',
    gradClassName: 'WEB5',
    favInstructor: 'Josh'
})

console.log(david);
console.log(david.standUp('WEB19'));
console.log(david.debugsCode('Bob', 'Python'));

const amanda = new ProjectManagers({
    name: 'Amanda',
    age: 27,
    location: 'New York, NY',
    specialty: 'SASS',
    favLanguage: 'CSS',
    catchPhrase: 'Geez, Rick.',
    gradClassName: 'CS2',
    favInstructor: 'Dan'
})

console.log(amanda);
console.log(amanda.standUp('CS7'));
console.log(amanda.debugsCode('Morty', 'CSS'));

const joseph = new ProjectManagers({
    name: 'Joseph',
    age: 23,
    location: 'Irvine, CA',
    specialty: 'Python',
    favLanguage: 'Ruby',
    catchPhrase: 'No pain, no gain.',
    gradClassName: 'WEBPT4',
    favInstructor: 'Mark'
})

console.log(joseph);
console.log(joseph.standUp('WEBPT6'));
console.log(joseph.debugsCode('Mary', 'Javascript'));