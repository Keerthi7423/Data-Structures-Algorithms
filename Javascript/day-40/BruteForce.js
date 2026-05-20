function maxSubArray(nums){

    let maxSum = -Infinity;

    for(let i=0;i<nums.length;i++){

        let currentSum=0;

        for(let j=i;j<nums.length;j++){

            currentSum += nums[j];

            maxSum = Math.max(maxSum,currentSum);

        }

    }

    return maxSum;
}