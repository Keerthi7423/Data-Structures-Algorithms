// // // // // // 11) Count properties
// // // // // // ----------------------------------------
// // // // // // Question:
// // // // // // Find number of keys

// // // // // let obj = {a:1, b:2, c:3};
// // // // // let count = Object.keys(obj).length;
// // // // // console.log(count);

// // // // // 12) Convert object to array
// // // // // ----------------------------------------
// // // // // Question:
// // // // // Convert to array format

// // // // let obj = {a:1, b:2};
// // // // let result = Object.entries(obj);

// // // // console.log(result);

// // // 13) Sum of values
// // // ----------------------------------------
// // // Question:
// // // Find sum of all values

// // let obj = {a:10, b:20, c:30};

// // let sum = 0;

// // Object.values(obj).forEach(val => {
// //     sum += val;
// // });

// // console.log(sum);

// // 14) Convert values to uppercase
// // ----------------------------------------
// // Question:
// // Uppercase all string values
// let obj = {a:"hi", b:"hello"};

// Object.keys(obj).forEach(key => {
//     obj[key] = obj[key].toUpperCase();
// });

// console.log(obj);


// 15) Find max value
// ----------------------------------------
// Question:
// Find largest value

let obj = {a:10, b:50, c:30};

let max = -Infinity;

Object.values(obj).forEach(val => {
    if(val > max){
        max = val;
    }
});

console.log(max);
