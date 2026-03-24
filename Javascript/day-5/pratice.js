console.log(5 - "2");

console.log("10" * 2);

console.log(10 % 3);

let x = 5;
console.log(x++);

let x1 = 5;
console.log(++x1);

console.log(true && false);

console.log(true || false);

console.log(!true);

console.log(5 == "5");

console.log(5 === "5");

let number = 7; // You can change this to any number

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

let program = 12;
if(program > 10) {
    console.log("program is greater than 10");
  }  else {
        console.log("program is less than or equal to 10");
    }

    let number1 = 42; // Change this to test different values

if (number1 >= 1 && number1 <= 100) {
    console.log("The number is between 1 and 100.");
} else {
    console.log("The number is outside the range.");
}

let a = 5;
let b = 10;
let temp; // Our "empty glass" (third variable)

console.log("Before Swap: a =", a, "b =", b);

// The Swap Process
temp = a;  // Step 1: temp now holds 5
a = b;     // Step 2: a now holds 10
b = temp;  // Step 3: b now holds 5 (from temp)

console.log("After Swap:  a =", a, "b =", b);

let a1 = 10;
let b1 = 20;

console.log("Before: a =", a1, "b =", b1);

// Step 1: a becomes the sum (10 + 20 = 30)
a2 = a1 + b; 

// Step 2: b becomes the original a (30 - 20 = 10)
b2 = a1 - b; 

// Step 3: a becomes the original b (30 - 10 = 20)
a3 = a2 - b2; 

console.log("After:  a =", a, "b =", b);

console.log("5" + 2 + 3);

console.log(2 + 3 + "5");

console.log(false == 0);

console.log(false === 0);