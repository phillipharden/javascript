//^ Basic Logging

// console.log("Hello World!");

// console.info("This is an info message.");

// console.warn("This is a warning!");

// console.error("This is an error!");

//^ Formatting Output

// console.log("My name is %s and I am %d years old.", "Phil", 47);

// console.log("%cThis is styled!", "color: blue; font-weight: bold;");

const styles = 'padding:15px 30px; background-color:#ffffff; color:blue; border-radius:50px;'

console.log("%cStyled Log", styles);

//^ Debugging & Performance

// console.assert(5 > 10, "This will not log because 5 is NOT greater than 10.");

// function test() {
//   console.trace("Trace Example");
// }
// test();

// console.time("MyTimer");
// for (let i = 0; i < 1000000; i++) {}
// console.timeEnd("MyTimer");

//^ Tables & Objects

// let users = [
//   { name: "Phil", age: 47 },
//   { name: "John", age: 25 },
// ];
// console.table(users);

// console.dir(document);

//^ Grouping Console Messages

// console.group("User Info");
// console.log("Name: Phil");
// console.log("Age: 30");
// console.groupEnd();

// console.groupCollapsed("Collapsed Info");
// console.log("Hidden details...");
// console.groupEnd();

//^ Clearing Console

// console.clear();

//^ Using Variables

const number = 20;
console.log(number);
console.log(number + 5);

let myName = "Phil";
let age = 47;

console.log("Name:", myName);
console.log("Age:", age);

console.log("My name is %s and I am %d years old.", myName, age);



