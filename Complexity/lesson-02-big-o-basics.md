# Lesson 02 — Big-O Basics

> Goal: Understand Big-O notation, common complexity classes, simplification rules, constants, and dominant terms.

---

## 1. What is Big-O?

Big-O notation describes how the time or space used by an algorithm grows as the input size increases.

We usually represent input size using:

```text
n
```

For example:

- Array with 10 elements → `n = 10`
- Array with 100 elements → `n = 100`
- Array with 1,000 elements → `n = 1000`

Big-O helps us answer:

> If the input becomes very large, how well will this algorithm scale?

Big-O does not tell us the exact number of seconds an algorithm takes. Instead, it describes the growth rate of the algorithm.

---

## 2. Why Do We Use Big-O?

Let's compare two algorithms.

### Algorithm A

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

The loop runs approximately `n` times.

Therefore:

```text
O(n)
```

### Algorithm B

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

The outer loop runs `n` times.

For every outer loop iteration, the inner loop runs `n` times.

Therefore:

```text
n × n = n²
```

Complexity:

```text
O(n²)
```

As `n` becomes large, `O(n²)` grows much faster than `O(n)`.

That is why complexity analysis is important.

---

## 3. Big-O is About Growth

Suppose we have:

```text
Algorithm A = n operations

Algorithm B = 5n operations

Algorithm C = 100n operations
```

All are considered:

```text
O(n)
```

Why?

Because all grow linearly with the input size.

When `n` doubles:

- `n` doubles
- `5n` doubles
- `100n` doubles

The growth pattern remains linear.

Therefore, Big-O ignores constant multipliers.

---

## 4. Common Complexity Classes

You should remember this general order:

```text
O(1)
↓
O(log n)
↓
O(n)
↓
O(n log n)
↓
O(n²)
↓
O(n³)
↓
O(2ⁿ)
↓
O(n!)
```

Generally, lower-growth complexities scale better for large inputs.

| Complexity | Name | Common Example |
|---|---|---|
| `O(1)` | Constant | Array access |
| `O(log n)` | Logarithmic | Binary Search |
| `O(n)` | Linear | Array traversal |
| `O(n log n)` | Linearithmic | Merge Sort |
| `O(n²)` | Quadratic | Nested loops |
| `O(n³)` | Cubic | Triple nested loops |
| `O(2ⁿ)` | Exponential | Subset brute force |
| `O(n!)` | Factorial | Permutations |

---

## 5. O(1) — Constant Time

`O(1)` means the amount of work does not grow with the input size.

Example:

```js
function getFirstElement(arr) {
    return arr[0];
}
```

It does not matter whether the array contains:

```text
10 elements
1,000 elements
1,000,000 elements
```

We directly access:

```js
arr[0];
```

Therefore:

```text
Time Complexity = O(1)
```

### Important

`O(1)` does not mean exactly one operation.

Example:

```js
let a = 10;
let b = 20;

let sum = a + b;

console.log(sum);
```

Multiple operations happen, but the amount of work does not grow with `n`.

Therefore:

```text
O(1)
```

---

## 6. O(n) — Linear Time

Example:

```js
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

If:

```text
n = 10
```

The loop runs approximately 10 times.

If:

```text
n = 100
```

The loop runs approximately 100 times.

If:

```text
n = 1000
```

The loop runs approximately 1000 times.

Therefore:

```text
Time Complexity = O(n)
```

The amount of work grows proportionally with the input size.

---

## 7. O(n²) — Quadratic Time

Example:

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Outer loop:

```text
n times
```

Inner loop:

```text
n times
```

Total:

```text
n × n = n²
```

Therefore:

```text
O(n²)
```

---

## 8. Two Sum Example

The Two Sum brute-force solution:

```js
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
```

The loops do not execute exactly `n × n` times.

The approximate number of comparisons is:

```text
n(n - 1) / 2
```

Expanding:

```text
(n² - n) / 2
```

For Big-O analysis, we focus on the dominant term:

```text
n²
```

Therefore:

```text
Time Complexity = O(n²)
Space Complexity = O(1)
```

---

## 9. O(log n) — Logarithmic Time

You will study logarithmic complexity more deeply later.

For now, understand this example:

```js
let n = 16;

while (n > 1) {
    n = Math.floor(n / 2);
}
```

The value changes like this:

```text
16
↓
8
↓
4
↓
2
↓
1
```

The input is repeatedly divided by 2.

Therefore:

```text
O(log n)
```

A famous example of logarithmic complexity is:

```text
Binary Search
```

---

## 10. O(n log n)

This complexity commonly appears in efficient sorting algorithms.

Examples:

- Merge Sort
- Heap Sort
- Quick Sort average case

Basic intuition:

```text
n elements
×
log n levels
```

Therefore:

```text
O(n log n)
```

You will study this in detail later.

---

## 11. O(2ⁿ) — Exponential Time

This complexity grows very quickly.

| n | 2ⁿ |
|---|---:|
| 1 | 2 |
| 5 | 32 |
| 10 | 1,024 |
| 20 | 1,048,576 |
| 30 | 1,073,741,824 |

This commonly appears in:

- Backtracking
- Recursive brute-force solutions
- Subset problems

---

## 12. O(n!) — Factorial Time

Factorial complexity grows extremely fast.

| n | n! |
|---|---:|
| 3 | 6 |
| 5 | 120 |
| 8 | 40,320 |
| 10 | 3,628,800 |

This commonly appears in:

- Permutation problems
- Brute-force arrangements

---

# 13. Rule 1 — Drop Constants

Suppose:

```text
O(2n)
```

We simplify it to:

```text
O(n)
```

Why?

Because Big-O focuses on the growth rate.

Examples:

```text
O(5n) → O(n)

O(100n) → O(n)

O(n / 2) → O(n)
```

Constant multipliers are ignored.

---

## 14. Rule 2 — Keep the Dominant Term

Suppose:

```text
O(n² + n + 10)
```

The terms are:

```text
n²
n
10
```

As `n` becomes very large, `n²` grows much faster than `n` and `10`.

Therefore:

```text
O(n² + n + 10)
```

becomes:

```text
O(n²)
```

### More Examples

```text
O(n³ + n² + n)
→ O(n³)
```

```text
O(n² + 100n)
→ O(n²)
```

```text
O(n + 100)
→ O(n)
```

```text
O(n⁴ + n² + n)
→ O(n⁴)
```

---

## 15. Rule 3 — Consecutive Operations Add

Example:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let j = 0; j < n; j++) {
    console.log(j);
}
```

First loop:

```text
O(n)
```

Second loop:

```text
O(n)
```

Total:

```text
O(n) + O(n)

= O(2n)

= O(n)
```

### Important

Two loops do not automatically mean:

```text
O(n²)
```

Consecutive loops usually add.

---

## 16. Rule 4 — Nested Operations Usually Multiply

Example:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }

}
```

Outer loop:

```text
O(n)
```

Inner loop:

```text
O(n)
```

Total:

```text
O(n) × O(n)

= O(n²)
```

Therefore:

```text
O(n²)
```

---

## 17. Rule 5 — Different Input Sizes Stay Different

Example:

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(i, j);
    }
}
```

Outer loop:

```text
n times
```

Inner loop:

```text
m times
```

Total:

```text
n × m
```

Therefore:

```text
O(nm)
```

Not:

```text
O(n²)
```

unless `n` and `m` represent the same input dimension.

---

## 18. Big-O Simplification Rules

Remember these rules:

### Rule 1: Drop Constants

```text
O(5n) → O(n)
```

### Rule 2: Keep the Dominant Term

```text
O(n² + n + 1) → O(n²)
```

### Rule 3: Consecutive Operations Add

```text
O(n) + O(n)
= O(2n)
= O(n)
```

### Rule 4: Nested Operations Usually Multiply

```text
O(n) × O(n)
= O(n²)
```

### Rule 5: Keep Different Variables

```text
O(n × m)
```

Do not automatically convert it to:

```text
O(n²)
```

---

## 19. Complexity Growth Comparison

| Complexity | n = 10 | n = 100 |
|---|---:|---:|
| `O(1)` | 1 | 1 |
| `O(log n)` | ~3 | ~7 |
| `O(n)` | 10 | 100 |
| `O(n log n)` | ~33 | ~664 |
| `O(n²)` | 100 | 10,000 |
| `O(2ⁿ)` | 1,024 | Extremely large |
| `O(n!)` | 3,628,800 | Extremely large |

This shows why complexity is important when input size becomes large.

---

## 20. Common Mistakes

### Mistake 1: O(1) Means One Operation

Wrong.

`O(1)` means constant work independent of input size.

---

### Mistake 2: Two Loops Always Means O(n²)

Wrong.

Consecutive loops:

```js
for (...) {}
for (...) {}
```

Usually:

```text
O(n) + O(n)
= O(n)
```

Nested loops:

```js
for (...) {
    for (...) {}
}
```

Often:

```text
O(n²)
```

---

### Mistake 3: Keeping Constants

Wrong:

```text
O(2n)
```

Correct:

```text
O(n)
```

---

### Mistake 4: Keeping Smaller Terms

Wrong:

```text
O(n² + n)
```

Correct:

```text
O(n²)
```

---

### Mistake 5: Ignoring Different Input Variables

Wrong:

```text
O(n²)
```

Correct when loops use different input sizes:

```text
O(nm)
```

---

## 21. Big-O and Two Sum

Let's compare both approaches.

### Brute Force

```text
Nested loops
↓
Approximately n² comparisons
↓
O(n²) Time

Extra variables only
↓
O(1) Space
```

### HashMap Approach

```text
One loop
↓
O(n) iterations

HashMap lookup
↓
Average O(1)

Total
↓
O(n) Time
```

But:

```text
HashMap can store n elements
↓
O(n) Space
```

Final comparison:

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Brute Force | `O(n²)` | `O(1)` |
| HashMap | `O(n)` average | `O(n)` |

This is a classic:

```text
Time-Space Tradeoff
```

---

## 22. How to Think During DSA Problems

Whenever you write a solution, ask:

### Step 1

What is the input size?

```text
n?
m?
V?
E?
```

### Step 2

How many times does each loop run?

### Step 3

Are loops:

```text
Consecutive?
Nested?
Dependent?
```

### Step 4

Does the algorithm:

```text
Divide input?
Double a variable?
Use recursion?
```

### Step 5

What extra memory grows with the input size?

---

# 23. Lesson 2 Summary

Big-O tells us:

> How an algorithm's time or memory usage grows as the input size increases.

Remember:

```text
O(1)       → Constant

O(log n)   → Logarithmic

O(n)       → Linear

O(n log n) → Linearithmic

O(n²)      → Quadratic

O(n³)      → Cubic

O(2ⁿ)      → Exponential

O(n!)      → Factorial
```

Main rules:

```text
Drop constants

Keep dominant terms

Consecutive operations → Add

Nested operations → Usually multiply

Different input sizes → Keep separate
```

---

# 24. Practice Questions

Try these without looking at the answers.

## Question 1

```js
let x = arr[0];
```

What is the Time Complexity?

---

## Question 2

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

What is the Time Complexity?

---

## Question 3

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let j = 0; j < n; j++) {
    console.log(j);
}
```

What is the Time Complexity?

---

## Question 4

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

What is the Time Complexity?

---

## Question 5

Simplify:

```text
O(5n + 10)
```

---

## Question 6

Simplify:

```text
O(n² + n + 100)
```

---

## Question 7

Simplify:

```text
O(n³ + n² + n)
```

---

## Question 8

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(i, j);
    }
}
```

What is the Time Complexity?

---

## Question 9

Why is:

```text
O(100n)
```

simplified to:

```text
O(n)
```

Explain in your own words.

---

## Question 10

What is the difference between consecutive loops and nested loops from a complexity perspective?

---

# 25. Lesson 2 Completion Checklist

Before moving to Lesson 3, make sure you can:

- [ ] Explain what Big-O means
- [ ] Explain why Big-O focuses on growth
- [ ] Understand `O(1)`
- [ ] Understand `O(log n)`
- [ ] Understand `O(n)`
- [ ] Understand `O(n log n)`
- [ ] Understand `O(n²)`
- [ ] Understand `O(n³)`
- [ ] Understand `O(2ⁿ)`
- [ ] Understand `O(n!)`
- [ ] Drop constants
- [ ] Identify dominant terms
- [ ] Analyze consecutive loops
- [ ] Analyze nested loops
- [ ] Keep different input variables separate
- [ ] Solve all practice questions

---

# Next Lesson

## Lesson 03 — Loop Analysis

You will learn:

- How to analyze loops step by step
- Single loops
- Consecutive loops
- Nested loops
- Dependent loops
- Loop counters
- Increment and decrement patterns
- Common loop complexity traps

---

> Don't memorize Big-O. Learn how to derive it.