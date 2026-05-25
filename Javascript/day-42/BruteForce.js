function findMaxAverage(nums,k){

    let maxSum=-Infinity;

    for(let i=0;i<=nums.length-k;i++){

        let sum=0;

        for(let j=i;j<i+k;j++){

            sum+=nums[j];

        }

        maxSum=Math.max(
            maxSum,
            sum
        );
    }

    return maxSum/k;
}