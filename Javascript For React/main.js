// // declare a constant variable
// const MY_CONSTANT = 123;

// // trying to reassign a constant variable will result in an error
// MY_CONSTANT = 456; // TypeError: Assignment to constant variable.

// console.log(MY_CONSTANT)



// JavaScript  uses a way to define variables called "lexical variable scope". This means that when a variable is defined inside a block of code, like a function or a loop, it can only be accessed within that block and its nested blocks.
// In JavaScript, we create code blocks with curly braces {}

// var topic = "JavaScript";
// if (topic) {
//   var topic = "React";
//   console.log("block", topic); // block React
// }
// console.log("global", topic); // global React

// var div, container = document.getElementById("container");
// //i =5
// for (let i = 0; i < 5; i++) {
//   //i = 0
//   div = document.createElement("div");
//   div.onclick = function () {
//     alert("This is box #" + i);
//   };
//   container.appendChild(div);
// }


// Function Declarations
// logCompliment();
// function logCompliment() {
//   console.log("You're doing great!");
// }


// Function Expressions
// console.log(logCompliment);
// logCompliment();
// const logCompliment = function () {
//   console.log("You're doing great!");
// };

//  JavaScript Steps To Execute Code :
/*
    1 - Tokenization => The JavaScript engine reads the source code character by character and breaks it down into individual tokens such as keywords, operators, and identifiers.
    2 - Parsing =>  creates an Abstract Syntax Tree (AST)
    3 - Compilation  => Engine Takes   AST and compiles it into low-level machine code
    4 - Execution => The engine executes the compiled code in the current execution context
 */


// Hoisting in JavaScript is a term that refers to how variable declarations and function declarations are processed during the creation phase of the execution context.

// execution context is an environment in which the code is executed and evaluated.


// 4 - Execution => The engine executes the compiled code in the current execution context
/*
    1 -  Creation of the Execution Context
        An execution context consists of three fundamental components:
        1- The Variable Object (VO): It contains all the variables, functions and parameters declared within the current scope. The VO is created during the creation phase of the execution context.
        2- Scope Chain: It is a list of all the Variable Objects that are in scope for the current execution context. The scope chain allows access to all the variables and functions declared in the current and outer scopes.
        3 - The this keyword: It refers to the current execution context's object.

    2 - Variable Declaration and Hoisting:
          During the creation phase of the execution context
          the engine allocates memory for all the variables and functions declared in the current scope. Function declarations are moved to the top of the scope, and variable declarations are initialized to undefined.
    3 - Execution of the Code: The engine executes the code line by line, following the rules of the JavaScript language specification. As the code is executed, the engine manages the memory by allocating and deallocating resources as needed.

    4 - Function Invocation: When the engine encounters a function call, it creates a new execution context for the function and adds it to the execution stack. The engine then executes the function code in the new context before returning control back to the previous context.

    5 - Variable Assignment: When the engine encounters a variable assignment, it updates the value of the variable in the current context's Variable Object.

    6 -Garbage Collection: As the code is executed, the engine may create and remove objects from memory. When an object is no longer referenced by any execution context, the engine marks it for garbage collection.
*/






// Hoisting influences the variable life cycle, which consists of 3 steps:
// Declaration - create a new variable. E.g. let myValue
// Initialization - initialize the variable with a value. E.g. myValue = 150
// Usage - access and use the variable value. E.g. alert(myValue)
// ##########################################################
// declare -> initialize -> use.
// let - const
//var  => undefined
//function   => Actual Value
// ##########################################################
// console.log(x); // Output: undefined
// var x = 5;
// var x;
// console.log(x); // Output: undefined
// x = 5;
// sayHello(); // Output: "Hello!"
// function sayHello() {
//   console.log("Hello!");
// }

// let x = 5;
// console.log(x); // Output: Uncaught ReferenceError: Cannot access 'x' before initialization
// sayHello(); // Output: Uncaught TypeError: sayHello is not a function
// const sayHello = function () {
//   console.log("Hello!");
// }


// Passing arguments
// let name = "zzz"
// const person = { name: "abdoelaziz" };
// const logCompliment = function (personz) {
//   console.log(`You're doing great, ${personz.name}`);
// };
// logCompliment("Abdoelaziz");
// logCompliment("aaa");
// logCompliment(person);
// JavaScript sets the value of the parameters to undefined if they are not provided with a value during the function call.


// ###################
// Arrow Function
// ######################
// const greet = () => ({ name: "abdo", age: 24 });

// console.log(greet());


// ###################
// Arrow Function Vs Regular Function
// ######################
// 1- Arguments
// const numbers = (...args) => {
//   console.log(args);
// }
// numbers(1, 2, 3, 4, 5)

//  2 - this depends on how the function is invoked in Regular Functions
// Simple invocation
// function myFunction() {
//   console.log(this);
// }
// myFunction(); // logs global object (window)
// Method invocation
// const myObject = {
//   method() {
//     console.log(this);
//   }
//   , name: "Aaa"
// };
// myObject.method();// logs myObject
// // indirect invocation
// function myFunction() {
//   console.log(this);
// }
// const myContext = { value: 'A' };
// myFunction.call(myContext);  // logs { value: 'A' }
// myFunction.apply(myContext); // logs { value: 'A' }
// // constructor invocation
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const person1 = new Person('John', 30);
// const person2 = new Person('Jane', 25);

// // This in Arrow Function
// // the value of "this" is determined lexically, based on where the function is defined.
// class Hero {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }
//   logName = () => {
//     console.log(this);
//     console.log(this.heroName);
//   }
// }
// const batman = new Hero('Batman');
// setTimeout(batman.logName, 1000);

// 3 - new keyword
const Car = color => {
  this.color = color;
}
const redCar = new Car('red');
console.log(redCar instanceof Car); // => true