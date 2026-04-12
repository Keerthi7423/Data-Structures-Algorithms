// Basic Loop Example
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//Loop Condition

// for( let i =1; i<=5;i++){
//     if(i %2 === 0){
//         console.log(i);
//     }
// }


// Using break
// for ( let i =1; i<=10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// Using continue

// for( let i = 1; i<=5; i++){
//     if (i === 3){
//         continue;
//     }
//     console.log(i);
// }

// while loop Pratice

// let i =1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// Combined Example

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  
  if (i === 8) {
    break;
  }

  console.log(i);
}