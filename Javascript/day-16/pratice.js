// 5️⃣ Sum of numbers from 1 to 10
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum += i;
//     i++;
// }

// console.log("Sum:", sum);

// 6️⃣ Factorial of a number
// let n = 5;
// let i = 1;
// let factorial = 1;

// while (i <= n) {
//     factorial *= i;
//     i++;
// }

// console.log("Factorial:", factorial);


// 7️⃣ Reverse a number

// let num = 123;
// let reversed = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Reversed:", reversed);

// 8️⃣ Count digits in a number

// let num = 12345;
// let count = 0;

// while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
// }

// console.log("Digits:", count);

// 9️⃣ Check palindrome
// let num = 121;
// let original = num;
// let reversed = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === reversed) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// 🔟 Sum of digits

// let num = 12345;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sum);


// 1️⃣1️⃣ Fibonacci series (first 10)

// let a = 0, b = 1;
// let count = 1;

// while (count <= 10) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//     count++;
// }

// 1️⃣2️⃣ Print numbers divisible by 5 (1–50)

let i = 1;

while (i <= 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}