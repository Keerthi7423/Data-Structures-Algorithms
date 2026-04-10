// 1️⃣1️⃣ Print numbers from 1–50 but:

// Skip multiples of 3
// Stop if number becomes greater than 40
for( let i =1; i<=50;i++){
    if(i%3===0){
        continue;
    }
    if(i>40){
        break;
    }
    console.log(i);
}

// 1️⃣2️⃣ Find first odd number divisible by 7 (1–100)
for( let i =1; i<=100;i++){
    if(i%2!==0 && i%7===0){
        console.log(i);
        break;
    }
}


// 1️⃣3️⃣ Print numbers 1–30:

// Skip even numbers
// Stop if number is greater than 25
for( let i =1; i<=30;i++){
    if(i%2===0){
        continue;
    }
    if(i>25){
        break;
    }
    console.log(i);
}

// 1️⃣4️⃣ Count how many numbers (1–50) are divisible by 4 (use continue)
    for( let i =1; i<=50;i++){
        if(i%4!==0){
            continue;
        }
        console.log(i);
    }


//     1️⃣5️⃣ Print numbers from array until you find value > 100

let arr = [10, 20, 50, 120, 30];

for( let i =0; i<arr.length;i++){
    if(arr[i]>100){
        break;
    }
    console.log(arr[i]);
}