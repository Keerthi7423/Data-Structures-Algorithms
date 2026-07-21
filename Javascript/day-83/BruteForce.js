function findMaxAverage(nums, k){

    let maxAverage = -Infinity;

    for(let i = 0; i <= nums.length - k; i++){

        let sum = 0;

        for(let j = i; j < i + k; j++){

            sum += nums[j];

        }

        maxAverage = Math.max(maxAverage, sum / k);

    }

    return maxAverage;

}

// Test Cases

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

console.log(findMaxAverage([5],1));

console.log(findMaxAverage([0,4,0,3,2],1));

console.log(findMaxAverage([3,3,4,3,0],3));