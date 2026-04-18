// // 🟢 ROUND 1: BASIC LOGIC

// // // // // // 1️⃣ Find sum of all elements in array
// // // // // let nums = [1, 2, 3, 4];
// // // // // let sum = 0;
// // // // // for (let i = 0; i < nums.length; i++) {
// // // // //     sum += nums[i];
// // // // // }
// // // // // console.log(sum);

// // // // // 2️⃣ Find maximum element

// // // // let nums = [5,10,15,20];
// // // // let max = nums[0];

// // // // for (let i = 1; i < nums.length; i++) {
// // // //     if (nums[i] > max) {
// // // //         max = nums[i];
// // // //     }
// // // // }

// // // // console.log(max);

// // // // // 3️⃣ Find minimum element

// // // // let nums = [10,5,2,8];

// // // // let min = nums[0];

// // // // for (let i = 1; i < nums.length; i++) {
// // // //     if (nums[i] < min) {
// // // //         min = nums[i];
// // // //     }
// // // // }

// // // // console.log(min);

// // // // 4️⃣ Count even numbers

// // // let nums = [1, 2, 3, 4, 5, 6];
// // // let count = 0;
// // // for (let i = 0; i < nums.length; i++) {
// // //     if (nums[i] % 2 === 0) {
// // //         count++;
// // //     }

// // // }

// // // console.log(count);

// // // 5️⃣ Count odd numbers

// // let nums = [1, 2, 3, 4, 5, 6];
// // let count = 0;
// // for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] % 2 !== 0) {
// //         count++;
// //     }
// // }

// // console.log(count);


// // ROUND 2: INTERMEDIATE
// // 6️⃣ Reverse an array (without using reverse())

// let nums = [1, 2, 3, 4];
// let reversed = [];
// for (let i = nums.length - 1; i >= 0; i--) {
//     reversed.push(nums[i]);
// }
// console.log(reversed);


// Check if a number exists in array

// let nums = [1, 2, 3, 4];
// let target = 3;
// let found = false;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         found = true;
//         break;
//     }
// }

// 8️⃣ Find index of a given number

// let nums = [1, 2, 3, 4];
// let target = 3;
// let index = -1;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         index = i;
//         break;
//     }
// }

// 9️⃣ Count how many times a number appears

// let nums = [1, 2, 3, 2, 4, 2];
// let target = 2;
// let count = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         count++;
//     }
// }
// console.log(count);

// Remove all duplicates from array

// let nums = [1, 2, 3, 2, 4, 1];
// let unique = [];
// for (let i = 0; i < nums.length; i++) {
//     if (!unique.includes(nums[i])) {
//         unique.push(nums[i]);
//     }
// }
// console.log(unique);

// 1️⃣1️⃣ Find second largest number
// let nums = [5, 10, 15, 20];
// let max = -Infinity;
// let secondMax = -Infinity;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//         secondMax = max;
//         max = nums[i];
//     } else if (nums[i] > secondMax && nums[i] !== max) {
//         secondMax = nums[i];
//     }
// }
// console.log(secondMax);

// 1️⃣2️⃣ Find second smallest number
// let nums = [5, 10, 15, 20];
// let min = Infinity;
// let secondMin = Infinity;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//         secondMin = min;
//         min = nums[i];
//     } else if (nums[i] < secondMin && nums[i] !== min) {
//         secondMin = nums[i];
//     }
// }
// console.log(secondMin);

// 1️⃣3️⃣ Move all zeros to end

// Example:
// [1, 0, 2, 0, 3] → [1, 2, 3, 0, 0]

// let nums = [1, 0, 2, 0, 3];
// let result = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//         result.push(nums[i]);
//     }
// }
// while (result.length < nums.length) {
//     result.push(0);
// }
// console.log(result);

// 1️⃣4️⃣ Find missing number in array
// Example:
// [1, 2, 4, 5] → Missing: 3

// let nums = [1, 2, 4, 5];
// let n = nums.length + 1; // Total numbers should be 5
// let totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
// let arraySum = 0;
// for (let i = 0; i < nums.length; i++) {
//     arraySum += nums[i];
// }
// let missing = totalSum - arraySum;
// console.log(missing);

// 1️⃣5️⃣ Find pair of numbers whose sum = target

// Example:
// [2, 7, 11, 15], target = 9 → (2, 7)

// let nums = [2, 7, 11, 15];
// let target = 9;
// let pair = null;
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             pair = [nums[i], nums[j]];
//             break;
//         }
//     }
//     if (pair) break;
// }
// console.log(pair);

// 1️⃣6️⃣ Find intersection of two arrays

// Example:
// [1, 2, 3], [2, 3, 4] → Intersection: [2, 3]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let intersection = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
//         intersection.push(arr1[i]);
//     }
// }
// console.log(intersection);

// 1️⃣7️⃣ Find union of two arrays
// Example:
// [1, 2, 3], [2, 3, 4] → Union: [1, 2, 3, 4]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let union = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!union.includes(arr1[i])) {
//         union.push(arr1[i]);
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (!union.includes(arr2[i])) {
//         union.push(arr2[i]);
//     }
// }
// console.log(union);

// 1️⃣8️⃣ Rotate array by 1 position

// Example:
// [1,2,3,4] → [2,3,4,1]

// let nums = [1, 2, 3, 4];
// let first = nums[0];
// for (let i = 0; i < nums.length - 1; i++) {
//     nums[i] = nums[i + 1];
// }
// nums[nums.length - 1] = first;
// console.log(nums);

// 1️⃣9️⃣ Check if array is sorted
// let nums = [1, 2, 3, 4];
// let isSorted = true;
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//         isSorted = false;    
//         break;
//     }
// }
// console.log(isSorted);

// 2️⃣0️⃣ Find longest increasing sequence
// Example:
// [1, 2, 3, 2, 5] → Longest increasing sequence: [1, 2, 3]

let nums = [1, 2, 3, 2, 5];
let longest = [];
let current = [];
for (let i = 0; i < nums.length; i++) {
    if (current.length === 0 || nums[i] > current[current.length - 1]) {
        current.push(nums[i]);
    } else {
        if (current.length > longest.length) {
            longest = current;
        }
        current = [nums[i]];
    }
}
if (current.length > longest.length) {
    longest = current;
}
console.log(longest);