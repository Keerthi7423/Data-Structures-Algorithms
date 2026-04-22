// // // // // // // // // 4) Convert array of objects to JSON
// // // // // // // // let arr = [
// // // // // // // //     {name:"A"},
// // // // // // // //     {name:"B"}
// // // // // // // // ];

// // // // // // // // let json = JSON.stringify(arr);
// // // // // // // // console.log(json);

// // // // // // // // // 5) Parse JSON and print all values using loop
// // // // // // // // let json = '{"a":10,"b":20,"c":30}';

// // // // // // // // let obj = JSON.parse(json);

// // // // // // // // for(let key in obj){
// // // // // // // //     console.log(obj[key]);
// // // // // // // // }

// // // // // // // // 6) Modify parsed object
// // // // // // // let json = '{"name":"Keerthi"}';

// // // // // // // let obj = JSON.parse(json);

// // // // // // // obj.name = "Kumar";

// // // // // // // console.log(obj);

// // // // // // 7) Count number of keys in parsed JSON
// // // // let json = '{"a":1,"b":2,"c":3}';

// // // // let obj = JSON.parse(json);

// // // // let count = Object.keys(obj).length;

// // // // console.log(count);

// // // 8) Find max value from JSON object
// // let json = '{"a":10,"b":50,"c":30}';

// // let obj = JSON.parse(json);

// // let max = -Infinity;

// // for(let key in obj){
// //     if(obj[key] > max){
// //         max = obj[key];
// //     }
// // }

// // console.log(max);

// // 9) Convert object to JSON and store
// let obj = {city:"Bangalore"};

// let jsonData = JSON.stringify(obj);

// console.log(jsonData);

// 10) Print only string values
let json = '{"a":"hi","b":10,"c":"js"}';

let obj = JSON.parse(json);

for(let key in obj){
    if(typeof obj[key] === "string"){
        console.log(obj[key]);
    }
}