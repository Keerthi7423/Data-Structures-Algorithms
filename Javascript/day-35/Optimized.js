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

return candidate;

}
