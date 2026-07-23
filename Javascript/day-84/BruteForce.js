function maxSumSubarray(nums, k){

    let maxSum = -Infinity;

    for(let i = 0; i <= nums.length - k; i++){

        let sum = 0;

        for(let j = i; j < i + k; j++){

            sum += nums[j];

        }

        maxSum = Math.max(maxSum, sum);

    }

    return maxSum;

}

// Test Cases

console.log(maxSumSubarray([2,1,5,1,3,2],3));

console.log(maxSumSubarray([1,2,3,4],2));

console.log(maxSumSubarray([5,5,5,5],2));

console.log(maxSumSubarray([10],1));