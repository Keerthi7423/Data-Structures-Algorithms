function sortColors(nums){

    let low=0;

    let mid=0;

    let high=nums.length-1;

    while(mid<=high){

        if(nums[mid]===0){

            [nums[low],nums[mid]]=[nums[mid],nums[low]];

            low++;

            mid++;

        }

        else if(nums[mid]===1){

            mid++;

        }

        else{

            [nums[mid],nums[high]]=[nums[high],nums[mid]];

            high--;

        }

    }

    return nums;

}

// Test Cases

console.log(sortColors([2,0,2,1,1,0]));

console.log(sortColors([2,0,1]));

console.log(sortColors([0]));

console.log(sortColors([1,2,0]));

console.log(sortColors([2,2,1,0,1,0]));