function findMaxAverage(nums, k){

    let sum = 0;

    for(let i = 0; i < k; i++){

        sum += nums[i];

    }

    let maxSum = sum;

    for(let right = k; right < nums.length; right++){

        sum += nums[right];

        sum -= nums[right - k];

        maxSum = Math.max(maxSum, sum);

    }

    return maxSum / k;

}

// Test Cases

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

console.log(findMaxAverage([5],1));

console.log(findMaxAverage([0,4,0,3,2],1));

console.log(findMaxAverage([3,3,4,3,0],3));

console.log(findMaxAverage([7,4,5,8,8],2));