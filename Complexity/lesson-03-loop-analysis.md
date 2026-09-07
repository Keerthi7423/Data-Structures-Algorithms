# Lesson 03 — Loop Analysis

## 🎯 Goal

Learn how to analyze loops and determine:

- Time Complexity
- Space Complexity
- Number of iterations
- Nested loop complexity
- Consecutive loop complexity
- Dependent loops
- Logarithmic loops
- Square-root loops
- Best, average, and worst case

The goal is **not to memorize Big-O**.

The goal is to understand **why** the complexity is what it is.

---

# 1. What Is Loop Analysis?

When analyzing an algorithm, ask:

> "How many times does this code execute as the input size `n` grows?"

For example:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
