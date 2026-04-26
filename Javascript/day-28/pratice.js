// // // // // // // // // 1) Simple callback
// // // // // // // // function process(num, cb) {
// // // // // // // //     return cb(num);
// // // // // // // // }

// // // // // // // // function double(x) {
// // // // // // // //     return x * 2;
// // // // // // // // }

// // // // // // // // console.log(process(5, double));

// // // // // // // 2) Arrow callback
// // // // // // let process = (num, cb) => cb(num);

// // // // // // console.log(process(5, x => x + 10));

// // // // // 3) Print after function
// // // // function task(cb) {
// // // //     console.log("Task running...");
// // // //     cb();
// // // // }

// // // // task(() => console.log("Task finished"));

// // // 4) Callback with condition
// // function check(num, cb1, cb2) {
// //     if (num % 2 === 0) {
// //         cb1();
// //     } else {
// //         cb2();
// //     }
// // }

// // check(4,
// //     () => console.log("Even"),
// //     () => console.log("Odd")
// // );


// 5) Callback in loop
function processArray(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

processArray([1,2,3], x => console.log(x * 2));
