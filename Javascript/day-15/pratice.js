// 6️⃣ Find sum of numbers from 1 to 10

let sum = 0;

for(let i=1;i<=10;i++){
    sum += i;
    console.log(`Current number: ${i}, Current sum: ${sum}`);
}


// 7️⃣ Find factorial of a number (e.g., 5 → 120)

let factorial = 1;
let number = 5;

for(let i=1;i<=number;i++){
    factorial *= i;
    console.log(`Current number: ${i}, Current factorial: ${factorial}`);
}


// 8️⃣ Count number of digits in a number

let count = 0;
let num = 12345;
while(num > 0){
    num = Math.floor(num / 10);
    count++;
}   
console.log(`Number of digits: ${count}`);


// 9️⃣ Reverse a number (e.g., 123 → 321)

let originalNum = 123;
let reversedNum = 0;
while(originalNum > 0){
    let digit = originalNum % 10;   
    reversedNum = reversedNum * 10 + digit;
    originalNum = Math.floor(originalNum / 10);
}   
console.log(`Reversed number: ${reversedNum}`);


// 🔟 Print numbers divisible by 3 from 1 to 30

for(let i=1;i<=30;i++){
    if(i % 3 === 0){
        console.log(i);
    }   
}


// 1️⃣1️⃣ Print pattern:

// *
// **
// ***
// ****
// // *****

for(let i=1;i<=5;i++){
    let pattern = '';
    for(let j=1;j<=i;j++){
        pattern += '*';
    }
    console.log(pattern);
}


// 1️⃣2️⃣ Print pattern:

// 1
// 12
// 123
// 1234

for(let i=1;i<=4;i++){
    let pattern = '';
    for(let j=1;j<=i;j++){
        pattern += j;
    }
    console.log(pattern);
}


// 1️⃣3️⃣ Check if a number is prime

let primeNum = 29;
let isPrime = true;
if(primeNum <= 1){
    isPrime = false;
}
for(let i=2;i<=Math.sqrt(primeNum);i++){
    if(primeNum % i === 0){
        isPrime = false;
        break;
    }
}
console.log(`${primeNum} is ${isPrime ? 'a prime number' : 'not a prime number'}`);

// 1️⃣4️⃣ Find largest digit in a number

let numToCheck = 987654321;
let largestDigit = 0;
while(numToCheck > 0){
    let digit = numToCheck % 10;
    if(digit > largestDigit){
        largestDigit = digit;
    }
    numToCheck = Math.floor(numToCheck / 10);
}
console.log(`Largest digit: ${largestDigit}`);

// 1️⃣5️⃣ Sum of digits of a number

let numForSum = 12345;
let sumOfDigits = 0;
while(numForSum > 0){
    let digit = numForSum % 10;
    sumOfDigits += digit;
    numForSum = Math.floor(numForSum / 10);
}
console.log(`Sum of digits: ${sumOfDigits}`);


// 1️⃣6️⃣ FizzBuzz:

// Multiple of 3 → Fizz
// Multiple of 5 → Buzz
// Both → FizzBuzz

for(let i=1;i<=30;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if(i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// 1️⃣7️⃣ Print Fibonacci series (first 10 numbers)

let a = 0, b = 1;
console.log(a);
console.log(b);
for(let i=3;i<=10;i++){
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// 1️⃣8️⃣ Find second largest number in array
// (prepare for next topic 👀)

let arr = [3, 1, 4, 1, 5, 9];
let largest = -Infinity;
let secondLargest = -Infinity;
for(let num of arr){
    if(num > largest){
        secondLargest = largest;
        largest = num;
    } else if(num > secondLargest && num !== largest){
        secondLargest = num;
    }
}
console.log(`Second largest number: ${secondLargest}`);