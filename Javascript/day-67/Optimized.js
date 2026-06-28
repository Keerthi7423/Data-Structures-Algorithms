function sortedSquares(nums){

    let left=0;

    let right=
    nums.length-1;

    let result=
    new Array(nums.length);

    let index=
    nums.length-1;

    while(left<=right){

        if(

            Math.abs(nums[left])

            >

            Math.abs(nums[right])

        ){

            result[index]=
            nums[left]*nums[left];

            left++;

        }

        else{

            result[index]=
            nums[right]*nums[right];

            right--;

        }

        index--;

    }

    return result;

}

// Test Cases

console.log(
sortedSquares([-4,-1,0,3,10])
);

console.log(
sortedSquares([-7,-3,2,3,11])
);

console.log(
sortedSquares([-5,-4,-2])
);