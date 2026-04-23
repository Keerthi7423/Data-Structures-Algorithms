// // // // // // // // // // // // // // // // // // // // // // // // 🟢 ROUND 1: BASIC
// // // // // // // // // // // // // // // // // // // // // // // // 1) Object → JSON
// // // // // // // // // // // // // // // // // // // // // // // let obj = {name:"Keerthi", age:22};

// // // // // // // // // // // // // // // // // // // // // // // let json = JSON.stringify(obj);
// // // // // // // // // // // // // // // // // // // // // // // console.log(json);

// // // // // // // // // // // // // // // // // // // // // // // // 2) JSON → Object

// // // // // // // // // // // // // // // // // // // // // // let json = '{"name":"Keerthi","age":22}';

// // // // // // // // // // // // // // // // // // // // // // let obj = JSON.parse(json);
// // // // // // // // // // // // // // // // // // // // // // console.log(obj);

// // // // // // // // // // // // // // // // // // // // // // // 3) Access property after parsing

// // // // // // // // // // // // // // // // // // // // // let json = '{"name":"Keerthi"}';

// // // // // // // // // // // // // // // // // // // // // let obj = JSON.parse(json);

// // // // // // // // // // // // // // // // // // // // // console.log(obj.name);

// // // // // // // // // // // // // // // // // // // // // 4) Add new property

// // // // // // // // // // // // // // // // // // // // obj.city = "Bangalore";
// // // // // // // // // // // // // // // // // // // // console.log(obj);

// // // // // // // // // // // // // // // // // // // // // 5) Delete property
// // // // // // // // // // // // // // // // // // // // delete obj.name;
// // // // // // // // // // // // // // // // // // // // console.log(obj);

// // // // // // // // // // // // // // // // // // // 🟡 ROUND 2: LOOP + JSON
// // // // // // // // // // // // // // // // // // 6) Print keys

// // // // // // // // // // // // // // // // // let json = '{"a":1,"b":2}';
// // // // // // // // // // // // // // // // // let obj = JSON.parse(json);

// // // // // // // // // // // // // // // // // for(let key in obj){
// // // // // // // // // // // // // // // // //     console.log(key);
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // 7) Print values

// // // // // // // // // // // // // // // // for(let key in obj){
// // // // // // // // // // // // // // // //     console.log(obj[key]);
// // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // 8) Print key-value pairs
// // // // // // // // // // // // // // // // ----------------------------------------
// // // // // // // // // // // // // // // // for(let key in obj){
// // // // // // // // // // // // // // // //     console.log(key + ": " + obj[key]);
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // 9) Count properties

// // // // // // // // // // // // // // // let count = Object.keys(obj).length;
// // // // // // // // // // // // // // // console.log(count);

// // // // // // // // // // // // // // 10) Check key exists

// // // // // // // // // // // // // console.log(obj.hasOwnProperty("a"));


// // // // // // // // // // // // 🔴 ROUND 3: LOGIC BUILDING

// // // // // // // // // // // let sum = 0;

// // // // // // // // // // // for(let key in obj){
// // // // // // // // // // //     sum += obj[key];
// // // // // // // // // // // }

// // // // // // // // // // // console.log(sum);

// // // // // // // // // // // 12) Find max value

// // // // // // // // // // let max = -Infinity;

// // // // // // // // // // for(let key in obj){
// // // // // // // // // //     if(obj[key] > max){
// // // // // // // // // //         max = obj[key];
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // console.log(max);

// // // // // // // // // 13) Print only string values

// // // // // // // // let json = '{"a":"hi","b":10,"c":"js"}';
// // // // // // // // let obj = JSON.parse(json);

// // // // // // // // for(let key in obj){
// // // // // // // //     if(typeof obj[key] === "string"){
// // // // // // // //         console.log(obj[key]);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // 14) Convert strings to uppercase

// // // // // // // for(let key in obj){
// // // // // // //     if(typeof obj[key] === "string"){
// // // // // // //         obj[key] = obj[key].toUpperCase();
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(obj);

// // // // // // // 15) New object with only numbers

// // // // // // let result = {};

// // // // // // for(let key in obj){
// // // // // //     if(typeof obj[key] === "number"){
// // // // // //         result[key] = obj[key];
// // // // // //     }
// // // // // // }

// // // // // // console.log(result);

// // // // // // 🧠 ROUND 4: ARRAY + JSON


// // // // // 16) Array of objects → JSON

// // // // let arr = [
// // // //     {name:"A"},
// // // //     {name:"B"}
// // // // ];

// // // // let json = JSON.stringify(arr);
// // // // console.log(json);

// // // // 17) Parse and print names

// // // let json = '[{"name":"A"},{"name":"B"}]';

// // // let arr = JSON.parse(json);

// // // for(let i = 0; i < arr.length; i++){
// // //     console.log(arr[i].name);
// // // }

// // // 18) Find highest score

// // let json = '[{"name":"A","score":50},{"name":"B","score":80}]';

// // let arr = JSON.parse(json);

// // let max = 0;

// // for(let i = 0; i < arr.length; i++){
// //     if(arr[i].score > max){
// //         max = arr[i].score;
// //     }
// // }

// // console.log(max);

// // 19) Filter score > 60

// for(let i = 0; i < arr.length; i++){
//     if(arr[i].score > 60){
//         console.log(arr[i]);
//     }
// }

// 20) Count objects

console.log(arr.length);
