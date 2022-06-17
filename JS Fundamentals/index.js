// console.log('Connected!');
/*console.log(12);
console.log(3 + 5);
console.log((1.8 * (300 - 273)) + 32); //K to F formula found in chat*/
/*let firstName;
console.log('First Name: ', firstName); 
firstName = "Fran";
console.log('First Name: ', firstName); 
 
let favoriteColor;
favoriteColor = "red";
let painterName = "Bob Ross";
const happyLittleTrees = true;
let numberOfTrees = null;

let firstName = "Fran";
let lastName = "Little";
//normal string
console.log('first name: ' + firstName);

//string interpolation
console.log(`first name: ${firstName}`);


console.log('My first name is ' + firstName + ' My last name is ' + lastName)
console.log(`My first name is ${firstName}. My last name is ${lastName}.`)


if (tempurature >= 80) {
    console.log('wear shorts!');
}

//AUTO FORMAT USING shift + alt + f


const a = 10;
const b = 2;
let result = null;

if (b != 0) {
    result = a / b;
    console.log(`Result : ${result}`);
}
//IF b is not equal to zero THEN set result to be a divided by b (10/2) and log the result.
//32 mins into LOGIC AND FLOW Lecture

const a = 18;
const b = 0;
let result = null;

if (b != 0) {
    result = a / b;
    console.log(`${a} divided by ${b} is ${result}`);
}
else {
    console.log('Do not divide by zero!')
}
*/

/*Maria's excited about the prospect of wearing shorts this summer, but given the weather patterns, she's never sure what to wear on any given day.
Maria wants a way for code to tell her what to wear.

STEPS:
1. Restate the problem.
2. Define test cases.
3. Plain English steps.
4. Test the plain English steps.
5. Convert plain English Steps to code.
6. TEST YOUR RESULTS!

Create a variable to hold current temperature.
If the temperature is greater than 80, then output "wear shorts" to the console.
If the temperature is less than 50, then output "wear a coat" to the console.
Implement this in your JS file.

2. TEST CASES: (test in parentheses)

a temperature less than or equal to 50 (45, 50)    --> we should see "wear coat"
a temperature greater than or equal to 80 (80, 85) --> we should see "wear shorts"
a temperature between 50 and 80 (65)               --> we should see nothing


3. PLAIN ENGLISH STEPS

IF the temperature is greater than or equal to 80,
    THEN wear shorts.

IF the temperature is less than or equal to 50,
    THEN wear a coat.


const temperature = 65;

//IF the temperature is greater than or equal to 80,
if (temperature >= 80) {
    //THEN wear shorts.
    console.log('Wear shorts!');
}

//IF the temperature is less than or equal to 50,
if (temperature <= 50) {
    //THEN wear a coat.
    console.log('Wear a coat!');
}

//ELSE IF
//ELSE IF temperature is greater than 50, and less than 80,
else if ( 50 <temperature && temperature < 80) {
    //THEN wear jeans
    console.log('Wear jeans.');
}

//ANOTHER WAY, W/ELSE IF:
const temperature = 90;

if (temperature >= 80) {
    console.log('Wear shorts!');
}

else if (50 < temperature && temperature < 80) {
    console.log('Wear jeans.');
}

else {
    console.log('Wear a coat!');
}


const returnDog = () => {
    return "dog";
}

let x = returnDog();

*/

//FUNCTIONS:

const averageOfTwoNumbers = (a, b) => {
    return (a + b) / 2;
}

let AV = averageOfTwoNumbers(4, 10)
