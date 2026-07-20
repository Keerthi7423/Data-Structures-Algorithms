function minSubArrayLen(target, nums){

    let minLength = Infinity;

    for(let i = 0; i < nums.length; i++){

        let sum = 0;

        for(let j = i; j < nums.length; j++){

            sum += nums[j];

            if(sum >= target){

                minLength = Math.min(minLength, j - i + 1);

                break;

            }

        }

    }

    return minLength === Infinity ? 0 : minLength;

}

// Test Cases

console.log(minSubArrayLen(7,[2,3,1,2,4,3]));

console.log(minSubArrayLen(4,[1,4,4]));

console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]));

console.log(minSubArrayLen(15,[1,2,3,4,5]));