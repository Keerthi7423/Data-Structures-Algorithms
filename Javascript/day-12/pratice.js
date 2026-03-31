// 6️⃣ Check if a number is:

// Positive
// Negative
// // Zero

let number = -3;

if(number >0){
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}if(number === 0){
    console.log("The number is zero");
}

// 7️⃣ Find the greatest of two numbers

let a = 10;
let greatest;

if(a >number){
    greatest = a;
    console.log("The greatest number is " + greatest);
    
} else if(number > a){
    greatest = number;
    console.log("The greatest number is " + greatest);
}

// 8️⃣ Find the greatest of three numbers

let x = 5;
let y =10;
let z = 15;
let greatestofthree;

if(x>y && x>z){
    greatestofthree = x;
    console.log("The greatest number is " + greatestofthree);
} else if(y>x && y>z){
    greatestofthree = y;
    console.log("The greatest number is " + greatestofthree);
}   else if(z>x && z>y){
    greatestofthree = z;
    console.log("The greatest number is " + greatestofthree);
}

// 9️⃣ Check if a number is between 1 and 100

let num = 50;

if(num > 1 && num < 100){
    console.log("The number is between 1 and 100");
} else {
    console.log("The number is not between 1 and 100");
}

// 🔟 Check if a character is vowel or consonant
let char = 'a';

if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    console.log("The character is a vowel");
} else {
    console.log("The character is a consonant");
}


// //1️⃣1️⃣ Grade system:

// 90+ → A
// 75–89 → B
// 50–74 → C
// // <50 → Fail

let marks = 85;

if(marks >= 90){ 
    console.log("Grade: A");
} else if(marks >= 75 && marks < 90){
    console.log("Grade: B");
} else if(marks >= 50 && marks < 75){
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


// 1️⃣2️⃣ Check leap year
let year = 2020;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}


// 1️⃣3️⃣ Login system:

// username = "admin"
// password = "1234"
// 👉 Print "Login Success" or "Invalid"

let username = "admin";     
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
} else {
    console.log("Invalid");
}


// 1️⃣4️⃣ Check if number is divisible by both 3 and 5
let number1 = 15;

if(number1 % 3 === 0 && number1 % 5 === 0){
    console.log("The number is divisible by both 3 and 5");
} else {
    console.log("The number is not divisible by both 3 and 5");
}


// 1️⃣5️⃣ Traffic signal:

// red → Stop
// yellow → Ready
// green → Go

let signal = "yellow";

if(signal === "red"){       
    console.log("Stop");
} else if(signal === "yellow"){
    console.log("Ready");
} else if(signal === "green"){
    console.log("Go");
}

// 1️⃣6️⃣ Find largest among 3 numbers WITHOUT using Math.max
let num1 = 10;
let num2 = 20;
let num3 = 15;
let largest;
if(num1 > num2 && num1 > num3){
    largest = num1;
    console.log("The largest number is " + largest);
}
else if(num2 > num1 && num2 > num3){
    largest = num2;
    console.log("The largest number is " + largest);
}   else if(num3 > num1 && num3 > num2){
    largest = num3;
    console.log("The largest number is " + largest);
}

// 1️⃣7️⃣ Check if a number is palindrome (e.g., 121)
let num21 = 121;
let reversed = 0;
let original = num21;
while(num21 > 0){
    let digit = num21 % 10;
    reversed = reversed * 10 + digit;
    num21 = Math.floor(num21 / 10);
} if(original !== reversed){
    console.log("The number is not a palindrome");

} else if(original === reversed){
    console.log("The number is a palindrome");
}

// // 1️⃣8️⃣ Nested if:
// Check if number is:

// positive AND even


let num31 = 8;

if(num31 > 0){  
    if(num31 % 2 === 0){
        console.log("The number is positive and even");
    } else {
        console.log("The number is positive but not even");
    } if(num31 < 0){
        console.log("The number is not positive");
    }
} else {
    console.log("The number is not positive");
}


// 1️⃣9️⃣ Check if year is century year (ends with 00)
let year1 = 1900;

if(year1 % 100 === 0){  
    console.log(year1 + " is a century year");
} else {
    console.log(year1 + " is not a century year");
}

// 2️⃣0️⃣ Discount system:

// 1000 → 20%

// 500 → 10%

// else → no discount

let price = 1000;

if(price >= 1000){  
    console.log("You get a 20% discount");
} else if(price >= 500 && price < 1000){
    console.log("You get a 10% discount");
} else {
    console.log("You get no discount");
}