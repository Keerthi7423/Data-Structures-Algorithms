// // // // // // // // // // // // // 1) Create object with method
// // // // // // // // // // // // Question:
// // // // // // // // // // // // Create an object with name and a method to print it
// // // // // // // // // // // let person = {
// // // // // // // // // // //     name: "Keerthi",
// // // // // // // // // // //     showName: function() {
// // // // // // // // // // //         console.log(this.name);
// // // // // // // // // // //     }
// // // // // // // // // // // };

// // // // // // // // // // // person.showName();

// // // // // // // // // // // 2) Add method to existing object
// // // // // // // // // // // ----------------------------------------
// // // // // // // // // // // Question:
// // // // // // // // // // // Add a method to print greeting

// // // // // // // // // // let obj = {
// // // // // // // // // //     name: "JS"
// // // // // // // // // // };

// // // // // // // // // // obj.greet = function() {
// // // // // // // // // //     console.log("Hello " + this.name);
// // // // // // // // // // };

// // // // // // // // // // obj.greet();

// // // // // // // // // 3) Object.keys()
// // // // // // // // // ----------------------------------------
// // // // // // // // // Question:
// // // // // // // // // Get all keys
// // // // // // // // let obj = {a:1, b:2, c:3};
// // // // // // // // console.log(Object.keys(obj));

// // // // // // // 4) Object.values()
// // // // // // // ----------------------------------------
// // // // // // // Question:
// // // // // // // Get all values
// // // // // // let obj = {a:1, b:2};
// // // // // // console.log(Object.values(obj));

// // // // // // 5) Object.entries()
// // // // // // ----------------------------------------
// // // // // // Question:
// // // // // // Get key-value pairs

// // // // // let obj = {a:1, b:2};
// // // // // console.log(Object.entries(obj))

// // // // // 6) Loop using Object.keys()
// // // // // ----------------------------------------
// // // // // Question:
// // // // // Print all keys and values

// // // // let obj = {name:"Keerthi", age:22};

// // // // Object.keys(obj).forEach(key => {
// // // //     console.log(key, obj[key]);
// // // // });

// // // // 7) Check property exists
// // // // ----------------------------------------
// // // // Question:
// // // // Check if 'age' exists

// // // let obj = {name:"Keerthi"};
// // // console.log(obj.hasOwnProperty("age"));

// // // 8) Merge objects
// // // ----------------------------------------
// // // Question:
// // // Merge two objects
// // let obj1 = {a:1};
// // let obj2 = {b:2};

// // let result = Object.assign({}, obj1, obj2);
// // console.log(result);

// // 9) Freeze object
// // ----------------------------------------
// // Question:
// // Prevent changes

// let obj = {a:1};
// Object.freeze(obj);

// obj.a = 10;
// console.log(obj);

// 10) Seal object
// ----------------------------------------
// Question:
// Allow update but not add/remove

let obj = {a:1};
Object.seal(obj);

obj.a = 5;
obj.b = 10;

console.log(obj);