# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: An argument are the parentheses that follow a function (), inside of the argument is what holds the parameters. These parameters hold information that we want our function to iterate through; it calls on a value, element or string to pass the information and perform the action of the function.
 
For example:
const exampleFxn = (parameters) =>{}
 
Researched answer: The major differences between an argument and parameter is that parameters are placeholder variables that are defined inside a functions expression; they are properties of a function whereas an argument is the data passed through the parentheses when calling on a function.

For example:
parameter: 
const greeting = (name) => {
    return `Hello there ${name}!`
}
arguement:
console.log("Monica")
//output: "Hello there Monica!"

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method takes in a value(required), index(optional) and array(optional) in its parameters. The value is the element in the datatype , the index holds the position of where the element is located in the data type, and the array passes through a collection of elements enclosed in [square brackets].
 
For example:
.map(value, index, array)
 
Researched answer: The built-in method .map has three built-in parameters: a value, index, and array. map is used in higher-order-functions which primarily work with arrays. The value is the required parameter that holds the element's value. The index is an optional parameter that tells the position/location of an element and the array parameter is optional as well that holds the defined array.

3. What is the difference between map and filter? 

Your answer: Both the built-in method's map and filter iterate through an array. The difference between the two is the map method will iterate through the collection of data to give back the original length of an array but add something to each element. Whereas, the filter method will iterate through an array but output a subset of the data in a new array.
 
Researched answer: Since both methods are used on higher-order-functions they both have the job of iterating through a datatype to create a new array. Each works differently when returning their values, the built-in method map has the job to iterate through an array and give back the original length but convert each item into a new array. While the filter method makes a decision about each then selects certain items in an array to return a subset based on the criteria given.

For example:
var exampleArray = [1, 5, 6, 8, 9]
//.map() -//
const exampleFxn2 = exampleArray.map((value) => {
    return value + 5
    })

console.log(exampleFxn2)
//output: [6, 10, 11, 13, 14]

//.filter() -//
const exampleFxn3 = exampleArray(array) => {
    return array.filter((value) => value % 2 !== 0)
}
console.log(exampleFxn3(exampleArray))
//output: [1, 5, 9]

4. What is iteration?

Your answer: Iteration is the act of performing an action throughout a datatype until it is told to stop.
 
Researched answer: Iteration is the process of code performing a specific action a certain amount of times until a specific end result is achieved. A common form of iteration is called a for loop. A for loop tells a function when processing a data type where to start the action with the index, when to stop using the index and where in the datatype to perform it. 

For example:
let newArray = []
for (i = 0; i < 10; i++) {
    console.log(i)
}
//output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

5. What is the difference between a class and an object?

Your answer: The difference between a class and object is an object is a collection of information that stores symbols that hold values. Whereas, a class is the blueprint for objects. Classes can store objects inside and call on them in functions to perform an action.
 
Researched answer: The main difference between a class and object is a class is only declared once whereas, there can be multiple objects of a class. Classes are similar to dynamic functions, they contain data and behavior. Objects are made up of key:value pairs (ie: animal: "dog"). Another difference is classes use PascalCase and objects just camelCase.

6. STRETCH: What is hoisting in JavaScript?

Your answer: To make an assumption, hoisting in Javascript is the act of running the written code. This process may be referred to as hoisting because we are throwing our code into our terminal and waiting for it to return an outcome.
(I apologize for this un-informed guess, because I have no idea.)
 
Researched answer: In Javascript, hoisting is not assigning a value to a function or variable before the user runs code. Resources report a benefit of using this method is the ability to call on functions before they appear in the code. Hoisting works on declared variables until a value is assigned.

For example: 
var test
console.log(test)
//output: undefined

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User stories are the end goal of what the users view on an application, they are directed at the users perspective. These are ultimately what the user is engaging in while using the application. It is useful because in order for the application to get good reviews it should look clean and be easy to locate certain content.
 
2. Spread operator: A spread operator ( ... ) is a built-in method that helps eliminate steps in a function to output a new array. This is used with primarily arrays and objects,to quickly copy all or certain parts to produce a new output. The benefit of this operator is it makes the code more concise and clean.
 
3. React state: State is a React component, the job of this built-in variable is to store data in its memory to calculate how the component behaves and renders information. The state's behavior can change over time, it is typically changing and not staying the same.
 
4. React props: Props is shorthand for properties. Props are a React component that are passed through arguments, it performs this using HTML attributes that store information. Props components are typically "read-only" components, meaning these components can not be edited or modified.
 
5. DOM events: DOM stands for Document Object Model, this is the idea that a web page works as a tree structure. It starts by writing HTML that is added as an element to this tree. Then using JavaScript, we can access any of these elements and update them.