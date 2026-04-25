// // const greet = () => {
// //   console.log("Hello");
// // };

// // greet();

// // // with Parameters
// // // const add = (a, b) => {
// // //   return a + b;
// // // };

// // // console.log(add(10, 20));

// // // ⚡ 6. Short Return (Implicit Return)
// // const add = (a, b) => a + b;

// // console.log(add(5, 5));

// // // Single Parameter
// //     const square = x => x * x;

// // console.log(square(4));

// // // No Parameters
// // const sayHi = () => "Hi";

// // console.log(sayHi());

// // this
// let obj = {
//   name: "Keerthi",
//   greet: () => {
//     console.log(this.name); // undefined
//   }
// };

const checkAge = age => 
  age > 18 ? "Adult" : "Minor";

console.log(checkAge(20));