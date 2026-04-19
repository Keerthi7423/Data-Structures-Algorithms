// let user = {
//   name: "Keerthi",
//   age: 22,
//   isActive: true,
//   skills: ["JS", "HTML"]
// };
// console.log(user);

// let student = {
//   name: "Keerthi",
//   age: 22
// };

// console.log(student.name);

// student.age = 23;

// student.city = "Bangalore";

// console.log(student);

let person = {
  name: "Keerthi",
  age: 22
};

for (let key in person) {
  console.log(key, person[key]);
}