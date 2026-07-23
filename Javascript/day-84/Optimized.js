function maxSumSubarray(nums, k){

    let windowSum = 0;

    for(let i = 0; i < k; i++){

        windowSum += nums[i];

    }

    let maxSum = windowSum;

    for(let right = k; right < nums.length; right++){

        windowSum += nums[right];

        windowSum -= nums[right - k];

        maxSum = Math.max(maxSum, windowSum);

    }

    return maxSum;

}

// Test Cases

console.log(maxSumSubarray([2,1,5,1,3,2],3));

console.log(maxSumSubarray([1,2,3,4],2));

console.log(maxSumSubarray([5,5,5,5],2));

console.log(maxSumSubarray([10],1));

console.log(maxSumSubarray([4,2,1,7,8,1],3));