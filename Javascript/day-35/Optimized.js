// HASHMAP LOGIC
// ==================================================

// Store frequency of every number

// Return number if count > n/2

function majorityElement(nums) {
let map = {};

for (let num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > nums.length / 2) {
        return num;
    }
}

}


// NEW ALGORITHM → BOYER MOORE
// ==================================================

// Different numbers cancel each other

// Majority survives

// [2,2,1,1,1,2,2]

// 2 ↑

// 2 ↑

// 1 ↓

// 1 ↓

// 1 ↑

// 2 ↑

// 2 ↑

// Final survivor:

// 2
function majorityElement(nums) {
let candidate = null;
let count = 0;

for (let num of nums) {
    if (count === 0) {
        candidate = num;
    }

    if (num === candidate) {
        count++;
    } else {
        count--;
    }
}
```javascript
// ==========================================================
// BOYER-MOORE VOTING ALGORITHM
// Time Complexity: O(n)
// Space Complexity: O(1)
// ==========================================================

// Problem:
// Find the element that appears more than n/2 times.

// Example:
// nums = [2, 2, 1, 1, 1, 2, 2]

// ----------------------------------------------------------
// CODE
// ----------------------------------------------------------

function majorityElement(nums) {

    // Candidate stores the current possible majority element.
    let candidate = null;

    // Count stores the current vote count.
    let count = 0;

    // Traverse every number in the array.
    for (let num of nums) {

        // --------------------------------------------------
        // STEP 1
        // If count becomes 0,
        // choose the current number as the new candidate.
        // --------------------------------------------------

        if (count === 0) {
            candidate = num;
        }

        // --------------------------------------------------
        // STEP 2
        // If current number equals candidate,
        // increase votes.
        //
        // Otherwise,
        // decrease votes.
        // --------------------------------------------------

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Final remaining candidate is the majority element.
    return candidate;
}

// ==========================================================
// DRY RUN
// ==========================================================

// nums = [2,2,1,1,1,2,2]

// Initial

// candidate = null
// count = 0

// ----------------------------------------------------------
// Iteration 1
// ----------------------------------------------------------

// num = 2

// count == 0
// candidate = 2

// num == candidate
// count = 1

// candidate = 2
// count = 1

// ----------------------------------------------------------
// Iteration 2
// ----------------------------------------------------------

// num = 2

// num == candidate

// count = 2

// candidate = 2
// count = 2

// ----------------------------------------------------------
// Iteration 3
// ----------------------------------------------------------

// num = 1

// Different number

// count--

// count = 1

// candidate = 2

// ----------------------------------------------------------
// Iteration 4
// ----------------------------------------------------------

// num = 1

// Different number

// count--

// count = 0

// candidate = 2

// ----------------------------------------------------------
// Iteration 5
// ----------------------------------------------------------

// num = 1

// count == 0

// Choose new candidate

// candidate = 1

// Same number

// count = 1

// ----------------------------------------------------------
// Iteration 6
// ----------------------------------------------------------

// num = 2

// Different number

// count--

// count = 0

// ----------------------------------------------------------
// Iteration 7
// ----------------------------------------------------------

// num = 2

// count == 0

// candidate = 2

// Same number

// count = 1

// ==========================================================
// FINAL RESULT
// ==========================================================

// candidate = 2

// Return 2

// ==========================================================
// WHY DOES THIS WORK?
// ==========================================================

// Same numbers increase the vote.
//
// Different numbers decrease the vote.
//
// Different elements cancel each other.
//
// Since the majority element appears more than n/2 times,
// it can never be completely canceled.
//
// Therefore, the remaining candidate is the majority element.

// ==========================================================
// VISUAL REPRESENTATION
// ==========================================================

// Array

// [2,2,1,1,1,2,2]

// Voting

// 2  -> +1
// 2  -> +1
// 1  -> -1
// 1  -> -1
// 1  -> +1 (New Candidate)
// 2  -> -1
// 2  -> +1 (New Candidate)

// Final Candidate

// 2

// ==========================================================
// INTERVIEW POINTS
// ==========================================================

// ✔ Time Complexity  : O(n)
//
// ✔ Space Complexity : O(1)
//
// ✔ Best solution for LeetCode 169.
//
// ✔ Assumes a majority element always exists.
//
// ✔ If the problem does NOT guarantee a majority element,
//    perform another pass to verify the candidate.
```
return candidate;

}
