// map()
// let nums = [1, 2, 3];

// let result = nums.map(n => n * 2);

// console.log(result);

// filter()

// let nums = [1,2,3,4];
// let result = nums.filter(n=>n%2===0);
// console.log(result);

// reduce()

// let nums = [1,2,3,4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

let nums = [1, 2, 3, 4];

// Double values
let doubled = nums.map(n => n * 2);

// Filter even numbers
let evens = nums.filter(n => n % 2 === 0);

// Sum all values
let total = nums.reduce((a, b) => a + b, 0);

console.log(doubled);
console.log(evens);
console.log(total);