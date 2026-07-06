function moveZeroes(nums){

    let write=0;

    for(let read=0;read<nums.length;read++){

        if(nums[read]!==0){

            nums[write]=nums[read];

            write++;

        }

    }

    while(write<nums.length){

        nums[write]=0;

        write++;

    }

    return nums;

}

// Test Cases

console.log(moveZeroes([0,1,0,3,12]));

console.log(moveZeroes([0]));

console.log(moveZeroes([1,2,3]));

console.log(moveZeroes([0,0,1]));

console.log(moveZeroes([4,0,5,0,6]));