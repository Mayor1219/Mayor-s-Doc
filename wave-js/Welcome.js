//alert("Hello Waves")

//variables and constant

let anime;
anime = "naruto"

console.log(anime)
alert(anime)

let Name = "Mayor";
let age = 190;
document.getElementById("test").innerHTML = Name + " And her age is" + age;
alert(Name);
alert(age);

// document.write('hello');
document.write('hello');

//keyword
//invalid
// let new = 5; // Error! new is a keyword.

// To use a keyword as a variable name, you need to apply underscored to it.

// program to print variables values

// storing values
const isThisAClass = true;
const greet = 'Hello';
const gname = 'Jack';

console.log("i am saying ", greet, gname, isThisAClass);

// JavaScript Data Types

//strings example
const name0 = 'Joe';
const name1 = "Mayor";
const name2 = `Esther`;
const result = `The names of the students are ${name0} , ${name1} and ${name2}`;

//alert(result);

// Number example
//const number1 = 3;
//const number2 = 3.433;
//const number3 = 3e5 // 3 * 10^5
//const nresult =  `the result of the number is ` + number1 + number2 + number3 ;
//alert( nresult)



const number4 = 3 / 0;
console.log(number4); // Infinity

const number5 = -3 / 0;
console.log(number5); // -Infinity

// strings can't be divided by numbers
const number6 = "abc" / 3;
console.log(number6); // NaN

// BigInt value
// const value1 = 900719925124740998 n;

// // Adding two big integers
// const result1 = value1 + 1 n;
// console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998 n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2);

// example of Object
const student = {
    stdnt1: 'Ada',
    stdnt2: null,
    no_of_stdnts: 10
};
console.log(student.stdnt1);
alert(student.stdnt2);

var cars = {
    make: "Toyota",
    model: "Big Daddy",
    year: 2023,
    color: "red",
    engine_no: "AGG125-P2018"
};
alert(cars)
console.log(cars.model)

//Javascript types
// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";

//Javascript Typeof
const tname = 'ram';
typeof(tname); // returns "string"
console.log(typeof tname)

// const number = 4;
// typeof(number); //returns "number"
// console.log(typeof number)

// const valueChecked = true;
// typeof(valueChecked); //returns "boolean"
// console.log(typeof valueChecked)

// const a = null;
// typeof(a); // returns "object"
// console.log(typeof a)

//Javascript Operators

//Arithmetic operators in Javascript

let num1 = 5;
let num2 = 3;

// addition
console.log('num1 + num2 = ', num1 + num2); // 8

// subtraction
console.log('num1 - num2 = ', num1 - num2); // 2

// multiplication
console.log('num1 * num2 = ', num1 * num2); // 15

// division
console.log('num1 / num2 = ', num1 / num2); // 1.6666666666666667

// remainder
console.log('num1 % num2 = ', num1 % num2); // 2

// increment
console.log('++num1 = ', ++num1); // num1 is now 6
console.log('num1++ = ', num1++); // prints 6 and then increased to 7
console.log('num1 = ', num1); // 7

// decrement
console.log('--num1 = ', --num1); // num1 is now 6
console.log('num1-- = ', num1--); // prints 6 and then decreased to 5
console.log('num1 = ', num1); // 5

//exponentiation
console.log('num1 ** num2 =', num1 ** num2);

//JavaScript Comparison Operators
const anum = 3,
    bnum = 2;
console.log(anum > bnum);
console.log(bnum > anum);
console.log(bnum === anum);
console.log(bnum !== anum);

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

//Logical Operators
const x = 5,
    y = 3;
(x < 6) && (y < 5); // true

// logical AND
console.log('this one', x > y && y < x); // true
console.log(x <= y && x == y); // false

// logical OR
console.log(x || y); // 5

// logical NOT
console.log(!x); // false

//Type Conversions

// numeric string used with + gives string type
let Tresult;

Tresult = '3' + 2;
console.log(Tresult) // "32"

Tresult = '3' + true;
console.log(Tresult); // "3true"

Tresult = '3' + undefined;
console.log(Tresult); // "3undefined"

Tresult = '3' + null;
console.log(Tresult); // "3null"

//const a = 5,
//b = '2',
//c = 'hello';

// equal to operator
// console.log(a == 5); // true
// console.log(b == '2'); // true
// console.log(c == 'Hello'); // false

if (5 > 2) {
    console.log("this is true");
} else {
    console.log("this is false");
}

// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
    console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");


// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let dnumber = parseInt(prompt('Input a number: '));

while (dnumber >= 0) {

    // add all positive numbers
    sum += dnumber;

    // take input again if the number is positive
    dnumber = parseInt(prompt('Input a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);


// Program to display wave
let m = 1
const n = 7

for (let m = 1; m <= n; m++) {
    alert('wave');
}

//functions in javascript
let dnum = 50;

function new_function() {
    let num1 = 20
        // alert("you just clicked me")
    console.log('you just clicked me')
    alert(num1)
}

//Array
const mcars = ["Toyota", "Volvo", "Benz"];
var legn = mcars.length;
console.log(legn)


console.log(mcars)
alert(mcars)

function Arr() {
    const cars = ["Toyota", "Volvo", "Benz"];
    document.getElementById("arr").innerHTML = cars;
}

const dcars = ["Toyota", "Volvo", "Benz"];
dcars.unshift("Lexus")
console.log(dcars)




//Regex
//example of string method
// let text = "Wave";
// let n_ = text.search("wave");
// document.getElementById("demo").innerHTML = n_;



function test() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
        text.replace("Wave", "Niit");

}


function test1() {
    let text = document.getElementById("momo").innerHTML;
    document.getElementById("momo").innerHTML =
        text.replace("Microsoft", "W3Schools");

}