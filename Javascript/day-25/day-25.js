// // // // // . Basic Object Practic
// // // // let user = {
// // // //   name: "Keerthi",
// // // //   age: 22
// // // // };

// // // // // Access
// // // // console.log(user.name);

// // // // // Update
// // // // user.age = 23;

// // // // // Add
// // // // user.city = "Bangalore";

// // // // // Delete
// // // // delete user.age;

// // // // console.log(user);

// // // // . Loop Through Object

// // // let user = {
// // //   name: "Keerthi",
// // //   age: 22
// // // };

// // // for (let key in user) {
// // //   console.log(key, user[key]);
// // // }

// // // Object Methods Practice
// // let user = {
// //   name: "Keerthi",
// //   age: 22
// // };

// // console.log(Object.keys(user));
// // console.log(Object.values(user));
// // console.log(Object.entries(user));

// // // JSON Practice

// let user = {
//   name: "Keerthi",
//   age: 22
// };

// // Convert to JSON
// let json = JSON.stringify(user);

// // Convert back to object
// let obj = JSON.parse(json);

// console.log(obj.name);

// Combined Example

let user = {
  name: "Keerthi",
  age: 22,
  skills: ["JS", "HTML"]
};

// Convert to JSON
let jsonData = JSON.stringify(user);

// Back to object
let newUser = JSON.parse(jsonData);

// Loop
Object.entries(newUser).forEach(([key, value]) => {
  console.log(key, value);
});