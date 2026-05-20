function maxSubArray(nums){

    let currentSum=0;
    let maxSum=nums[0];

    for(let num of nums){

        currentSum += num;

        maxSum=Math.max(maxSum,currentSum);

        if(currentSum<0){
            currentSum=0;
        }
    }

    return maxSum;
}