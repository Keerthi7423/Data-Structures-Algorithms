// 1️⃣ Check if a number is positive or negative
let number = 5

if (number > 0){
    console.log("Then number is positive");

} else if(number < 0){
    console.log("Then number is negative");
}

// 2️⃣ Check if a number is even or odd
let num = 10
if( num %2===0){
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// 3️⃣ Check if a number is greater than 10

let n = 15;
let greaterthan10 ;

if(n>10){
    greaterthan10 = true;
    console.log("The number is greater than 10");
} else {
    greaterthan10 = false;
    console.log("The number is not greater than 10");
}

// 4️⃣ Check if a person is eligible to vote (age ≥ 18)

let age = 20;
let eligibletoVote;

if(age===18){
    eligibletoVote =true;
    console.log("The person is eligible to vote");
} else {
    eligibletoVote = false;
    console.log("The person is not eligible to vote");
}

// 5️⃣ Check if a number is divisible by 5

let div =25;

let divisibleby5;

if(div %5===0){
    divisibleby5 = true;
    console.log("The number is divisible by 5");
} else {
    divisibleby5 = false;
    console.log("The number is not divisible by 5");
}