// Improved Version (ES6 Style)

const calculator = (a, b, op) => { switch (op) { case "+": return a + b; case "-": return a - b; case "*": return a * b; case "/": return b !== 0 ? a / b : "Error"; default: return "Invalid"; } }; console.log(calculator(20, 10, "*"));