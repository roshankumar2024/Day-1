//Basics Data types
//Number Data Type

var number = 7
console.log(number)

// String Data Type

var str = 'Roshan Kumar'
console.log(str)

// Boolean Data type

var isRaining = true
console.log(isRaining)

// Null Data type

var xy = null
console.log(x)

// Undefined data type

var y;
console.log(y)



// Control Flow 
// Conditional Statements
var x = 10
if (x>5){
    console.log("True")
}else{
    console.log('False')
}

let xz = 10;

if (xz > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

// Switch statement


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("It's an ordinary day");
}

// Loops
// For Loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For in loop 
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

for (let key in person) {
    console.log(key, person[key]);
}

// For of Loop

const numbers = [1, 2, 3, 4];

for (let num of numbers) {
    console.log(num);
}

// Foreach Function

const colors = ["red", "green", "blue"];

colors.forEach(color => {
    console.log(color);
});

// Do While Loop 

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);

// While Loop 
let xs = 0;

while (xs < 3) {
  console.log(xs);
  xs++;
}


// Break Statement 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Continue Statement

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

// Exception Handling

function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
  
      let result = a / b;
      return result;
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      console.log("This block always executes");
    }
  }
  
  // Example usages
  console.log(divide(10, 2));  
  console.log(divide(8, 0)); 
  



