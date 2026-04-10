// 1️⃣ Print numbers from 1 to 10 but stop when number is 6
for( let i =1; i<=10;i++){
    if(i===6){
        break;
    }
    console.log(i);
}

// 2️⃣ Print numbers from 1 to 10 but skip number 4

for( let i =1; i<=10;i++){
    if(i===4){
        continue;
    }
    console.log(i);
}

// 3️⃣ Print only even numbers from 1 to 20 using continue
for( let i =1; i<=20;i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}

// 4️⃣ Print only odd numbers from 1 to 20 using continue
for( let i =1; i<=20;i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}

// 5️⃣ Print numbers from 1 to 10 but stop when number is divisible by 3
for( let i =1; i<=10;i++){
    if(i%3===0){
        break;
    }
    console.log(i);
}

// 6️⃣ Print numbers from 1 to 30 but skip multiples of 5
for( let i =1; i<=30;i++){
    if(i%5===0){
        continue;
    }
    console.log(i);
}

// 7️⃣ Find the first number between 1–100 divisible by 9
for( let i =1; i<=100;i++){
    if(i%9===0){
        console.log(i);
        break;
    }
}

// 8️⃣ Print numbers from 1–20 but skip numbers divisible by both 2 and 3
for( let i =1; i<=20;i++){
    if(i%2===0 && i%3===0){
        continue;
    }
    console.log(i);
}

// 9️⃣ Given array:

// let arr = [10, 20, -5, 30, 40];

// 👉 Stop printing when you find a negative number
let arr = [10, 20, -5, 30, 40];
for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        break;
    }
    console.log(arr[i]);
}

// 🔟 Given array:

// let arr = [5, -2, 10, -3, 20];

// 👉 Print only positive numbers

for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        continue;
    }
    console.log(arr[i]);
}