# JavaScript Concepts and Examples
1️⃣ What is the difference between var, let, and const?

In JavaScript, var, let, and const are used to declare variables, but they are different in scope and usage.

var is function scoped. It can be redeclared and reassigned.

Example

var x = 10;
var x = 20;
x = 30;


let is block scoped. It cannot be redeclared in the same scope but it can be reassigned.

Example

let y = 10;
y = 20;


const is also block scoped. It cannot be redeclared or reassigned after declaration. However, properties of objects or elements of arrays can still be changed.

Example

const a = 10;

const obj = {name: "John"};
obj.name = "Mike";


2️⃣ **What is the spread operator (...) ?**

The spread operator **(...)** is used to expand elements of an array or properties of an object into another array or object. It is commonly used for copying or merging arrays and objects.

Example

const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

const result = [...arr1, ...arr2];

console.log(result);


Output

[10, 20, 30, 40, 50, 60]


3️⃣ What is the difference between map(), filter(), and forEach()?

map() transforms each element of an array and returns a new array.

Example


const words = ["java", "javascript", "python", "mysql"];

const result = words.map(word => word.length);

console.log(result);


filter() returns a new array with elements that match a specific condition.

Example

const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 3);

console.log(result);


forEach() loops through each element of an array but does not return a new array.

Example

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num);
});


4️⃣ What is an arrow function?

An arrow function is a shorter way to write functions in JavaScript using the **=>** syntax.

Example

const square = x => x * x;

console.log(square(4));


16


5️⃣ What are template literals?

Template literals are strings written using backticks (` `). They allow variable interpolation and multi-line strings.

Example

const name = "John";

const message = `Hello ${name},
Welcome to JavaScript`;

console.log(message);

