// Day 9 - String Methods

let text = "  JavaScript Learning  ";

// Trim
let cleanText = text.trim();

// Upper & Lower
console.log(cleanText.toUpperCase());
console.log(cleanText.toLowerCase());

// Index
console.log(cleanText.indexOf("Script"));

// Replace
console.log(cleanText.replace("Learning", "Practice"));

// Slice
console.log(cleanText.slice(0, 10));

// Includes
console.log(cleanText.includes("Javascript"));