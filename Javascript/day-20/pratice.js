// ARRAY METHODS - PRACTICE

// 1) push
let arr1 = [1, 2, 3];
arr1.push(100); // add at end
console.log(arr1);

// 2) pop
let arr2 = [10, 20, 30];
arr2.pop(); // remove last
console.log(arr2);

// 3) unshift
let arr3 = [2, 3];
arr3.unshift(1); // add at start
console.log(arr3);

// 4) shift
let arr4 = [5, 6, 7];
arr4.shift(); // remove first
console.log(arr4);

// 5) join
let arr5 = ["JS", "is", "fun"];
console.log(arr5.join(" ")); // convert to string

// 6) map - double numbers
let arr6 = [1, 2, 3];
let res6 = arr6.map(num => num * 2);
console.log(res6);

// 7) map - uppercase
let arr7 = ["a", "b", "c"];
let res7 = arr7.map(str => str.toUpperCase());
console.log(res7);

// 8) map - add 5
let arr8 = [10, 20, 30];
let res8 = arr8.map(num => num + 5);
console.log(res8);

// 9) map - square
let arr9 = [2, 3, 4];
let res9 = arr9.map(num => num * num);
console.log(res9);

// 10) filter - even
let arr10 = [1, 2, 3, 4];
let res10 = arr10.filter(num => num % 2 === 0);
console.log(res10);

// 11) filter - >20
let arr11 = [10, 25, 30, 5];
let res11 = arr11.filter(num => num > 20);
console.log(res11);

// 12) filter - remove negative
let arr12 = [-2, 5, -1, 10];
let res12 = arr12.filter(num => num >= 0);
console.log(res12);

// 13) find
let arr13 = [5, 8, 12, 20];
let res13 = arr13.find(num => num > 10);
console.log(res13);

// 14) findIndex
let arr14 = [10, 20, 30, 40];
let res14 = arr14.findIndex(num => num === 30);
console.log(res14);

// 15) some
let arr15 = [1, 2, -3];
let res15 = arr15.some(num => num < 0);
console.log(res15);

// 16) every
let arr16 = [1, 2, 3];
let res16 = arr16.every(num => num > 0);
console.log(res16);

// 17) reduce - sum
let arr17 = [1, 2, 3, 4];
let sum = arr17.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 18) reduce - max
let arr18 = [10, 5, 25, 8];
let max = arr18.reduce((a, b) => (a > b ? a : b));
console.log(max);

// 19) reduce - total string length
let arr19 = ["hi", "hello"];
let total = arr19.reduce((sum, str) => sum + str.length, 0);
console.log(total);