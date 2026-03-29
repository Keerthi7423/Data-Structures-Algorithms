// ROUND 1: BASIC LOGIC
// 1️⃣ Clean the string and print in uppercase
// let text = "  hello world  ";
// let clean = text.trim();
// let upper = clean.toUpperCase();
// console.log(upper);

// 2️⃣ Extract first 5 characters
// let str = "JavaScript";
// let first5 = str.slice(0,5);
// console.log(first5);

// 3️⃣ Replace "World" with "Keerthi"
// let msg = "Hello World";
// let replace =msg.replace("World", "Keerthi");
// console.log(replace);

// 4️⃣ Check if string contains "Script"
// let str = "JavaScript";
// let contains = str.includes("Script");
// console.log(contains);

// 🟡 ROUND 2: COMBINATION (IMPORTANT 🔥)

// 5️⃣ Convert to uppercase and remove spaces
// let name = "  keerthi  ";
// let upper = name.toUpperCase();
// let clean = upper.trim();
// console.log(clean);

// 6️⃣ Extract "Script" from "JavaScript" and print in lowercase
// let str = "JavaScript";
// let extract = str.slice(4);
// console.log(extract.toLowerCase());

// 7️⃣ Take string:
// HELLO JS
// let text = "  hello js  ";
// let clean = text.trim();
// let upper = clean.toUpperCase();
// console.log(upper);

// 8️⃣ Replace + Uppercase
// let str = "hello world";
// let replace = str.replace("world", "JS");
// let upper = replace.toUpperCase();
// console.log(upper);

// 🔴 ROUND 3: REAL LOGIC BUILDING
// 9️⃣ Take name:

// let name = "  keerthi kumar  ";

// 👉 Output:

// Hello KEERTHI

// (Hint: trim + slice + uppercase)

// let name = "  keerthi kumar  ";
// let trim = name.trim();
// let upper = trim.toUpperCase();
// let slice = upper.slice(0, 7);
// console.log(`Hello ${slice}`);

// 🔟 Take string:

// let str = "javascript";

// 👉 Output:

// Javascript

// (first letter capital)

// let str = "javascript";
// let first = str.charAt(0).toUpperCase();
// let rest = str.slice(1);
// let result = first + rest;
// console.log(result);

// 1️⃣1️⃣ Take string:

// let str = "  web development  ";

// 👉 Output:

// WEB

// (Hint: trim + slice + uppercase)

// let str = "  web development  ";
// let trim = str.trim();
// let upper = trim.toUpperCase();
// let slice = upper.slice(0,3);
// console.log(slice);

// 1️⃣2️⃣ Predict output:
// let str = "  hello  ";
// console.log(str.trim().toUpperCase().slice(0, 3));

// 1️⃣3️⃣ Predict output:
// let str = "JavaScript";
// console.log(str.slice(-6).toUpperCase());

// 1️⃣4️⃣ Predict output:
let str = "  js  ";
console.log(`${str.trim().toUpperCase()}`);