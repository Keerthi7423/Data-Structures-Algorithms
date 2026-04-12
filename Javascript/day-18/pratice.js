// 1️⃣ Print numbers from 1 to 15

// for ( let i = 1; i<=15;i++){
//     console.log(i);
// }

// 2️⃣ Print numbers from 15 to 1

// for (let i = 15; i>=1;i--){
    
//     console.log(i);
// }

// 3️⃣ Print only even numbers from 1 to 30

// for ( let i =1; i<=30; i++){
//    if(i%2 === 0){
//     console.log(i);
//    } 
// }

// 4️⃣ Print only odd numbers from 1 to 30
// for(let i=1;i<=30;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// 5️⃣ Print multiplication table of 7

// for ( let i =1; i<=10;i++){
//     console.log(`7 x ${i} = ${7*i}`);
// }


// 6️⃣ Print numbers 1–20 but stop when number is 12

// for ( let i =1; i<=20;i++){
//     if(i===12){
//         break;
//     }
//     console.log(i);
// }

// 7️⃣ Print numbers 1–20 but skip multiples of 4

// for ( let i =1; i<=20;i++){
//     if(i%4===0){
//         continue;
//     }
//     console.log(i);
// }

// 8️⃣ Print numbers 1–50:

// Skip multiples of 3
// Stop when number is greater than 40

// for( let i =1; i<=50;i++){
//     if(i%3===0){
//         continue;
//     }
//     if(i>40){
//         break;
//     }
//     console.log(i);
// }

// 9️⃣ Print numbers from array:

// let arr = [10, 20, -5, 30, 40];

// 👉 Stop when negative appears

// let arr = [10, 20, -5, 30, 40];

// for( let i =0; i<arr.length;i++){
//     if(arr[i]<0){
//         break;
//     }
//     console.log(arr[i]);
// }


// 🔟 Print only positive numbers from:

// let arr = [5, -2, 10, -3, 20];

// for( let i =0; i<arr.length;i++){
//     if(arr[i]<0){
//         continue;
//     }
//     console.log(arr[i]);
// }


// 1️⃣1️⃣ Find sum of numbers from 1 to 50
// let sum =0;
// for( let i =1; i<=50;i++){
//     sum += i;
// }
// console.log(sum);

// 1️⃣2️⃣ Find factorial of a number
// let num =5;
// let factorial =1;
// for( let i =1; i<=num;i++){
//     factorial *= i;
// }
// console.log(factorial);

// 1️⃣3️⃣ Reverse a number
// let num =12345;
// let reversed =0;
// while(num>0){
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(reversed);

// 1️⃣4️⃣ Count digits in a number
// let num =12345;
// let count =0;
// while(num>0){
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(count);

// 1️⃣5️⃣ Check if number is palindrome
// let num =12321;
// let original = num;
// let reversed =0;
// while(num>0){
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }
// if(original === reversed){
//     console.log(`${original} is a palindrome`);
// } else {
//     console.log(`${original} is not a palindrome`);
// }


// 1️⃣6️⃣ Solve using while loop:
// 👉 Print numbers 1–10
// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// 1️⃣7️⃣ Solve using do-while loop:
// 👉 Print numbers 1–10
// let i =1;
// do{
//     console.log(i);
//     i++;
// } while(i<=10);

// 1️⃣8️⃣ Use while loop + break:
// 👉 Find first number divisible by 11 (1–100)
// let i =1;
// while(i<=100){
//     if(i%11===0){
//         console.log(i);
//         break;
//     }
//     i++;
// }


// 1️⃣9️⃣ Use do-while + continue:
// 👉 Print only odd numbers from 1–20


let i =1;
do{
    if(i%2===0){
        i++;
        continue;
    }
    console.log(i);
    i++;
} while(i<=20);