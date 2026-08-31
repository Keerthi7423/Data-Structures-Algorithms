# Lesson 01 — Introduction to Complexity

> Goal: Understand what algorithm complexity is, why it matters, and the difference between Time Complexity and Space Complexity.

---

# 1. What is an Algorithm?

An algorithm is a step-by-step procedure used to solve a problem.

Example:

Problem:
Find whether a number exists in an array.

Algorithm:

1. Start from the first element.
2. Compare it with the target.
3. If found, return true.
4. Otherwise, continue.
5. If the array ends, return false.

Example code:

```js
function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true;
        }
    }

    return false;
}