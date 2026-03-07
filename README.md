1️⃣ What is the difference between var, let, and const?
=> var is function scope. it can be redeclare and ressign, where let and const are block scope
=> let is block scope. it can't redclare but can be ressign.
=> const is also block scope. but it can't be redclare or ressign. object properties can be changed, but the variable cannot be reassigned.

2️⃣ What is the spread operator (...)?
=>The spread operator (...) is used to expand or copy elements of an array or object into another array or object.
const arr1 = [10, 20, 30]
const arr2 = [40, 50, 60]

const res = [...arr1, ...arr2]
console.log("res")
output will be = [10, 20, 30, 40, 50, 60]


3️⃣ What is the difference between map(), filter(), and forEach()?
=>map() transfrom each elements and returns a new array
    const ward = ["java", "javascript", "python", "MySql"]
    const result = ward.map(word => word.length);
    console.log(result);

=>filter()returns elements that match a condition
    const numbers = [1,2,3,4,5];
    const result = numbers.filter(num => num > 3);
    console.log(result);

=>forEach() → only loops through the array, does not return anything.
    numbers.forEach(function(num) {
    console.log(num)})



4️⃣ What is an arrow function?
Arrow function in JavaScript is a shorter syntax to write functions using =>
const square = x => x * x;
console.log(square(4));


5️⃣ What are template literals?
=>Template literals are strings wrapped in backticks that allow variable/ expression interpolation and multi-line strings.
    const mes = `This is line 1 
    This is line 2`;
    console.log(mes);

