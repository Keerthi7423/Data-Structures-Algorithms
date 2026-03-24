// ========================================
// DAY-4 TYPE CONVERSION ANSWERS
// ========================================

// 1. "5" + 2 → string + number → string
console.log("5" + 2); // "52"

// 2. "5" - 2 → string converted to number
console.log("5" - 2); // 3

// 3. "5" * "2" → both converted to number
console.log("5" * "2"); // 10

// 4. true + 1 → true = 1
console.log(true + 1); // 2

// 5. false + 1 → false = 0
console.log(false + 1); // 1

// 6. "10" / 2 → string → number
console.log("10" / 2); // 5

// 7. "Hello" - 2 → invalid number
console.log("Hello" - 2); // NaN

// 8. Number conversion
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN

// 9. Boolean conversion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// ========================================
// CODING QUESTIONS
// ========================================

// Convert string to number
let str = "100";
let num = Number(str);
console.log(num); // 100

// Convert number to string
let n = 50;
let str2 = String(n);
console.log(str2); // "50"

// Convert 0 to boolean
let val = 0;
console.log(Boolean(val)); // false

// Convert "true" to boolean
let val2 = "true";
console.log(Boolean(val2)); // true (non-empty string = true)

// Two ways to convert number to string
let x = 25;
console.log(String(x));   // "25"
console.log(x.toString()); // "25"

// ========================================
// BONUS (TRICKY)
// ========================================

// Empty arrays
console.log([] + []); // ""

// Array + object
console.log([] + {}); // "[object Object]"

// Object + array (JS interprets differently)
console.log({} + []); // 0 (or "[object Object]" in some cases)

// null + 1 → null = 0
console.log(null + 1); // 1

// undefined + 1 → undefined = NaN
console.log(undefined + 1); // NaN