// // 1️⃣ Convert object → JSON
// let obj = {name:"Keerthi"};
// let json = JSON.stringify(obj);
// console.log(json);

// 2️⃣ Convert JSON → object
// let json = '{"name":"Keerthi"}';

// let obj = JSON.parse(json);

// console.log(obj.name);

// 3) Access value after parsing
let json = '{"name":"Keerthi","age":22}';

let obj = JSON.parse(json);

console.log(obj.name);