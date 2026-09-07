// ======================================================
// DAY 1 — JavaScript Basics
// ======================================================


// ======================================================
// PART 1 — VARIABLES
// ======================================================

{
    // Task 1
    let age = 25;
    console.log(age);
}

{
    // Task 2
    const name = "Keerthi";
    console.log(name);
}

{
    // Task 3
    let a = 10;
    a = 74;
    console.log(a);
}


// ======================================================
// PART 2 — var vs let
// ======================================================

{
    // Task 4
    var number1 = 10;
    number1 = 20;
    console.log(number1);
}

{
    // Task 5
    let number2 = 30;
    number2 = 40;
    console.log(number2);
}

{
    // Task 6
    // IMPORTANT:
    // You need to test let block scope yourself.

    {
        let blockLet = 50;
        console.log(blockLet);
    }

    // Now try accessing blockLet here.
    // First predict what will happen.
    //
    // console.log(blockLet);
}

{
    // Task 7
    // IMPORTANT:
    // Test var inside a block.

    {
        var blockVar = 70;
        console.log(blockVar);
    }

    // Now try accessing blockVar here.
    //
    console.log(blockVar);
}


// ======================================================
// PART 3 — PRIMITIVE DATA TYPES
// ======================================================

{
    // Task 8

    let myString = "Hello, World!";
    let myNumber = 42;
    let myBigInt = 1234567890123456789012345678901234567890n;
    let myBoolean = true;
    let myUndefined;
    let myNull = null;
    let mySymbol = Symbol("mySymbol");

    console.log(myString);
    console.log(myNumber);
    console.log(myBigInt);
    console.log(myBoolean);
    console.log(myUndefined);
    console.log(myNull);
    console.log(mySymbol);
}


{
    // Task 9

    let myString = "Hello";
    let myNumber = 42;
    let myBigInt = 123n;
    let myBoolean = true;
    let myUndefined;
    let myNull = null;
    let mySymbol = Symbol("id");

    console.log(typeof myString);
    console.log(typeof myNumber);
    console.log(typeof myBigInt);
    console.log(typeof myBoolean);
    console.log(typeof myUndefined);
    console.log(typeof myNull);
    console.log(typeof mySymbol);
}


{
    // Task 10

    console.log(typeof null);
}


// ======================================================
// PART 4 — OBJECTS
// ======================================================

{
    // Task 11

    const person = {
        name: "Keerthi",
        age: 25,
        country: "India"
    };

    console.log(person);


    // Task 12

    console.log(person.name);


    // Task 13

    console.log(person["age"]);


    // Task 14

    person.age = 26;

    console.log(person.age);


    // Task 15

    person.isStudent = true;

    console.log(person);
}


// ======================================================
// PART 5 — DAY 1 CODING HOMEWORK
// ======================================================

{
    // Problem 1

    let myName = "Keerthi";
    let myAge = 25;
    let myCountry = "India";
    let isStudent = true;

    console.log(myName);
    console.log(myAge);
    console.log(myCountry);
    console.log(isStudent);
}


{
    // Problem 2

    let myAge = 25;

    let myAgeAfter5Years = myAge + 5;

    console.log(myAgeAfter5Years);
}


{
    // Problem 3

    let celsius = 30;

    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log(fahrenheit);
}


{
    // Problem 4

    let fahrenheit = 86;

    let celsius = (fahrenheit - 32) * 5 / 9;

    console.log(celsius);
}


{
    // Problem 5

    let length = 5;
    let width = 10;

    let area = length * width;

    console.log(area);
}


{
    // Problem 6

    let length = 5;
    let width = 10;

    let perimeter = 2 * (length + width);

    console.log(perimeter);
}


{
    // Problem 7

    let radius = 5;

    let area = Math.PI * radius * radius;

    console.log(area);
}


{
    // Problem 8

    let totalMinutes = 135;

    let hours = Math.floor(totalMinutes / 60);
    let remainingMinutes = totalMinutes % 60;

    console.log(`${hours} hours ${remainingMinutes} minutes`);
}


{
    // Problem 9

    let totalSeconds = 3695;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    console.log(
        `${hours} hours ${minutes} minutes ${seconds} seconds`
    );
}


{
    // Problem 10

    let a = 10;
    let b = 20;

    let temp = a;

    a = b;
    b = temp;

    console.log(`a = ${a}, b = ${b}`);
}


// ======================================================
// PART 6 — MY OWN EXPERIMENTS
// ======================================================

// Experiment 1:
//
// Write your prediction first.
// Then write code.
//
// Prediction:
//


// Experiment 2:
//
// Prediction:
//


// Experiment 3:
//
// Prediction:
//


// ======================================================
// DAY 1 COMPLETE
// ======================================================