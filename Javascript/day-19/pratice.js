// 6️⃣ Print all elements of an array using loop
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 7️⃣ Find length of array
console.log(numbers.length);

// 8️⃣ Print all elements in reverse order
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// 9️⃣ Find sum of all elements
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 🔟 Find maximum number in array
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Maximum number:", max);


// 1️⃣1️⃣ Count how many even numbers in array
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Count of even numbers:", evenCount);

// 1️⃣2️⃣ Count how many odd numbers

let oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddCount++;
    }
}
console.log("Count of odd numbers:", oddCount);
// 1️⃣3️⃣ Find smallest number in array

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Smallest number:", min);
// 1️⃣4️⃣ Check if a number exists in array
let target = 30;
let exists = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        exists = true;
        break;
    }
}
console.log(target + " exists in array:", exists);

// 1️⃣5️⃣ Find index of a given number
let targetIndex = 40;
let index = -1;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetIndex) {
        index = i;
        break;
    }
}
console.log("Index of " + targetIndex + ":", index);