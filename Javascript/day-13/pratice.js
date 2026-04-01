let dayname = 2;

switch(dayname){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");    
        break;
        case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid");
}

let num1 = 10;
let num2 = 5;
let operator = "+"; // Try changing this to "-", "*", or "/"
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`Result: ${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        break;
    case "*":
        result = num1 * num2;
        console.log(`Result: ${num1} * ${num2} = ${result}`);
        break;
    case "/":
        // Direct check to prevent division by zero
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`Result: ${num1} / ${num2} = ${result}`);
        } else {
            console.log("Error: Cannot divide by zero.");
        }
        break;
    default:
        console.log("Invalid Operator: Please use +, -, *, or /");
}


let score = 85;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A+";
        break;
    case (score >= 80):
        grade = "A";
        break;
    case (score >= 70):
        grade = "B";
        break;
    case (score >= 60):
        grade = "C";
        break;
    case (score >= 50):
        grade = "D";
        break;
    case (score >= 0 && score < 50):
        grade = "F (Fail)";
        break;
    default:
        grade = "Invalid Score";
}

console.log(`Score: ${score}, Grade: ${grade}`);


let level = 5;

switch (level) {
    // Group 1, 2, 3
    case 1:
    case 2:
    case 3:
        console.log("Low");
        break;

    // Group 4, 5, 6
    case 4:
    case 5:
    case 6:
        console.log("Medium");
        break;

    // Handling 7 and everything above
    default:
        if (level >= 7) {
            console.log("High");
        } else {
            console.log("Invalid Input");
        }
        break;
}

let choice = 2; // Simulating user input

switch (choice) {
    case 1:
        console.log("Redirecting to Login page...");
        // loginFunction();
        break;
    case 2:
        console.log("Opening Signup form...");
        // signupFunction();
        break;
    case 3:
        console.log("Exiting system. Goodbye!");
        // process.exit();
        break;
    default:
        console.log("Invalid choice. Please select 1, 2, or 3.");
}