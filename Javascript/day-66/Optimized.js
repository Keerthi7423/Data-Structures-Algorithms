function twoSum(numbers,target){

    let left=0;

    let right=
    numbers.length-1;

    while(left<right){

        let sum=
        numbers[left]
        +
        numbers[right];

        if(sum===target){

            return [
                left+1,
                right+1
            ];

        }

        if(sum<target){

            left++;

        }

        else{

            right--;

        }

    }

}

// Test Cases
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
console.log(twoSum([-1,0],-1));
console.log(twoSum([1,2,3,4,4,9],8));