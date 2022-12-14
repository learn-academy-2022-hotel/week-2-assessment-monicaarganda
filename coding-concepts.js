// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: ["H", "o", "t", "e", "l", " ", "2", "0", "2", "2"]
// b) Verify and explain: This is correct because the built-in method split is used to turn strings in arrays. By passing "" into the parameters it breaks the string down in each character inside of the string including the space between Hotel and 2022. Since split turns a string into an array it will deliver the output as an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))
//output: undefined

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: The output came back as undefined because it is using a higher order function. HOF's primarily operate on arrays and iterate through accessing each element in the array, the word "name" is in the anonymous functions parameter which is meant to access the array's value. Also a function was declared but wasn't told to return anything which is why the terminal came back as "undefined". In order to assign value to the function we will have to declare and assign value to an array and add a return to line 19 before the string interpolation.

// For example:
const myArray = ["LEARN Student"]
const greeter1 = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter1("LEARN Student"))

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: This is the output because it has all the contents a higher-order function needs. A function was declared, an array ([4, 5, 6, 7, 8]) was called on, followed by map to iterate through each element. Inside the built-in method map's parameters an argument was passed "number", this named each individual element and multiplied each by 2. Returning a new array that is the same as the original length by has new elements.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: This is the correct output because the function (onlyOdds) is using the built-in method filter to iterate through the array ([11, 12, 13, 14, 15]), this will output a subset of the original array, and return every value that is not divisible by 2 in a new array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: This is the correct output because when calling on an object, dot notation is needed in between the object and the key we want to access. Since the first key value in the object has the value of strings inside an array, [] is needed to access each element's location. [0] is used to pull the first element from the array which is "JavaScript". 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// b) Verify and explain: This is the correct output because in the constructor the  argument being passed is "name", which is the value of the object key (student). By creating the new instance of the class "Learn" with the data "George" it replaces the value next to the object key student and reads the new class with "George" in the profile.
