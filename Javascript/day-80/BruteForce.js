function nextPermutation(nums) {

    const original = [...nums];

    const permutations = [];

    function backtrack(start) {

        if (start === nums.length) {
            permutations.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {

            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);

    // Sort lexicographically
    permutations.sort((a, b) => {

        for (let i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }

        }

        return 0;

    });

    // Find current permutation
    let index = -1;

    for (let i = 0; i < permutations.length; i++) {

        if (JSON.stringify(permutations[i]) === JSON.stringify(original)) {
            index = i;
            break;
        }

    }

    // Return next permutation
    if (index === permutations.length - 1) {
        return permutations[0];
    }

    return permutations[index + 1];
}

// Test Cases

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,1,5]));