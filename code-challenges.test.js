// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
        
//PSEUDOCODE:

    // RED
        // Write the test
        describe("comboArray", () => {
            it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
                const numbersArray1 = [6, 7, 8, 9, 10]
                // Expected output: [18, 21, 24, 27, 30]
                const numbersArray2 = [24, 27, 30, 33, 36]
                // Expected output: [72, 81, 90, 99, 108]
                expect(comboArray(numbersArray1)).toEqual([18, 21, 24, 27, 30])
                expect(comboArray(numbersArray2)).toEqual([72, 81, 90, 99, 108])
            })
        })
            
        // See the test fail
            // Good failure
            // FAIL  ./code-challenges.test.js
            // comboArray
            //   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3
                
            // ● comboArray › takes in an array of numbers and returns an array with all the numbers multiplied by 3
                
            //   ReferenceError: comboArray is not defined

            
// b) Create the function that makes the test pass.
            
    // GREEN 
        // Write the code
            // declare a function called comboArray
            // input: array of numbers, parameter called array
            // output: an array with all the numbers multiplied by 3, same length as the original
            // Process
            // iterate across the values and multiply each value by 3 using the high order function map()
            // return the array created by the high order function
            
        // FUNCTION
        // const comboArray = ( array ) => {
        //     return array.map((value) => {
        //     return value * 3
        //     })
        // }
        
        // See the test pass
            // PASS
            // PASS  ./code-challenges.test.js
            // comboArray
            //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)
            
        // REFACTOR
            // Refactor, if necessary
            const comboArray = ( array ) => {
                return array.map(value =>value * 3)
            }
            
            
            
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

    // RED
        // Write the test
        describe("divisibleBy", () => {
            it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
                const object1 = { number: 15 }
                // Expected output: "15 is divisible by three"
                const object2 = { number: 0 }
                // Expected output: "0 is divisible by three"
                const object3 = { number: -7 }
                // Expected output: "-7 is not divisible by three"
                expect(divisibleBy(object1.number)).toEqual("15 is divisible by three")
                expect(divisibleBy(object2.number)).toEqual("0 is divisible by three")
                expect(divisibleBy(object3.number)).toEqual("-7 is not divisible by three")
            })
        })
        
        // See the test fail
        // FAIL  ./code-challenges.test.js
        // comboArray
        //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
        // divisibleBy
        //   ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
      
        // ● divisibleBy › takes a object as an argument and decides if the number inside it is evenly divisible by three or not
      
        //   ReferenceError: divisbleBy is not defined

// b) Create the function that makes the test pass.
    // GREEN 
        // Write the code
    //PSEUDOCODE: 
        //declare a function called divisibleBy
        // input: an object with a key:value pair
        // output: a string using string interpolation to provide a statement if a number is divisble by 3 or not
        // Process
        // use a conditional statement within a function:
        // if a number with in a object is divisible by 3 then the output will read `${object} is divisible by three`
        // if a number with in a object is not divisible by 3 then the output will read `${object} is not divisible by three`
        const divisibleBy = (object) => {
            if (object % 3 === 0) {
                return `${object} is divisible by three`
            } else {
                return `${object} is not divisible by three`
            }
        }
        // console.log(divisibleBy(object1.number))
        // //output: "15 is divisible by three"
        // console.log(divisibleBy(object2.number))
        // //output: "0 is divisible by three"
        // console.log(divisibleBy(object3.number))
        // //output: "-7 is not divisible by three"
        // console.log(divisibleBy(9))
        // //output: "9 is divisible by three"
        // console.log(divisibleBy(5))
        // //output: 5 is not divisible by three

        // See the test pass
        // PASS  ./code-challenges.test.js
        // comboArray
        //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
        // divisibleBy
        //   ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (2 ms)
      
        // Test Suites: 1 passed, 1 total
        // Tests:       2 passed, 2 total
        // Snapshots:   0 total
        // Time:        0.169 s, estimated 1 s
        // Ran all test suites.
        // ✨  Done in 0.67s.
        // REFACTOR
            // Refactor, if necessary

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    // RED
        // Write the test
        describe("firstCaps", () => {
            it("returns an array with all the words capitalized", () => {
                const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
                // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
                const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
                // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
                expect(firstCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
                expect(firstCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
            })
        })

        // See the test fail
        // FAIL  ./code-challenges.test.js
        // comboArray
        //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
        // divisibleBy
        //   ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
        // firstCaps
        //   ✕ returns an array with all the words capitalized (1 ms)
      
        // ● firstCaps › returns an array with all the words capitalized
      
        //   ReferenceError: firstCaps is not defined

// b) Create the function that makes the test pass.
    // GREEN 
        // Write the code
    //PSEUDOCODE: 
        // declare a function called firstCaps
        // input: an array of strings
        // ouput: return a new array with the original length that makes the strings first letter capitialized
    // Process:
        // declare a function that takes in a array
        // return a higher order function that takes in each element in the array
        // return the strings with the first letter capitalized, by chaining built-in methods. To access each element use .charat(0), this uses the index to locate the first letter. Then .toUpperCase() to capitalize each element.
        //output:["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"]
        // Since each letter in the element is capitialize use the .slice() method and .toLowerCase() together to lowercase each character after the 0 index
    //Function:
        // const firstCaps = (array) => {
        //     return array.map(string => {
        //         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        //     })
        // }

        // console.log(firstCaps(randomNouns1))
        // //output: [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
        // console.log(firstCaps(randomNouns2))
        // //output: [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]
        // console.log(firstCaps(["it", "gets", "better"]))
        // //output:  [ 'It', 'Gets', 'Better' ]
        
    // See the test pass:
        // PASS  ./code-challenges.test.js
        // comboArray
        //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
        // divisibleBy
        //   ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
        // firstCaps
        //   ✓ returns an array with all the words capitalized
      
        // Test Suites: 1 passed, 1 total
        // Tests:       3 passed, 3 total
        // Snapshots:   0 total
        // Time:        0.177 s
        // Ran all test suites.
        // ✨  Done in 0.70s.

    // REFACTOR:
        // Refactor, if necessary
        const firstCaps = (array) => {
            return array.map((string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
        }

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

    // RED
        // Write the test
        describe("firstVowel", () => {
            it("takes in a string and logs the index of the first vowel", () => {
                const vowelTester1 = "learn"
                // Expected output: 1
                const vowelTester2 = "academy"
                // Expected output: 0
                const vowelTester3 = "challenges"
                // Expected output: 2
                expect(firstVowel(vowelTester1)).toEqual(1)
                expect(firstVowel(vowelTester2)).toEqual(0)
                expect(firstVowel(vowelTester3)).toEqual(2)
            })
        })

    // See the test pass
        // FAIL  ./code-challenges.test.js
        // comboArray
        //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)
        // divisibleBy
        //   ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
        // firstCaps
        //   ✓ returns an array with all the words capitalized (1 ms)
        // firstVowel
        //   ✕ takes in a string and logs the index of the first vowel
      
        // ● firstVowel › takes in a string and logs the index of the first vowel
      
        //   ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

    // GREEN 
        // Write the code
    //PSEUDOCODE: 
        // declare a function called firstVowel
        // input: a string
        // ouput: a number that represents the index of the first vowel in each string
    // Process:
        // create a function that takes in a string
        // declare a variable called "stringSplit" and assign it the value of taking in the string and using the accessor (split) to turn it into an array
        // declare another variable called "vowelArr" to assign the data that is passed into [sqaure brackets]
        // with the new variable "stringSplit" attach the built-in method for arrays (filter) to iterate through the original array and return a subset of the data into a new array
        // inside the parameters of (filter) it will access the (letter) and (index) of each element of the array
        // use a conditional statment 
        // if: the letter called on using dot notation to attach the built-in method (includes) a vowel in the passed as an arguement with Or (logical operator, ||) to include each vowel the array has
        // then push the index of each vowel in the data into [] with the function "vowelArr"
        // return the function vowelArr that contains each vowel index and get the index of the first vowel in the array by using [0]


        const firstVowel = (string) => {
            let stringSplit = string.split("")
            let vowelArr = []
            stringSplit.filter((letter, i) => {
                if (
                    letter.includes("a") ||
                    letter.includes("e") ||
                    letter.includes("i") ||
                    letter.includes("o") ||
                    letter.includes("u")
                ) {
                    vowelArr.push(i)
                } 
            })
            return vowelArr[0]
        }
        // console.log(firstVowel(vowelTester1))
        //output: 1
        // console.log(firstVowel(vowelTester2))
        //output: 0
        // console.log(firstVowel(vowelTester3))
        //output: 2
        // console.log(firstVowel("monica"))
        //output: 1

    //   PASS  ./code-challenges.test.js
    //   comboArray
    //     ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)
    //   divisibleBy
    //     ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)
    //   firstCaps
    //     ✓ returns an array with all the words capitalized
    //   firstVowel
    //     ✓ takes in a string and logs the index of the first vowel
    
    //   Test Suites: 1 passed, 1 total
    //   Tests:       4 passed, 4 total
    //   Snapshots:   0 total
    //   Time:        0.179 s, estimated 1 s
    //   Ran all test suites.
    //   ✨  Done in 0.70s.