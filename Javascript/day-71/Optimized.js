function removeDuplicates(nums){

    if(nums.length===0){

        return 0;

    }

    let write=1;

    for(let read=1;read<nums.length;read++){

        if(nums[read]!==nums[read-1]){

            nums[write]=nums[read];

            write++;

        }

    }

    return write;

}

// Test Cases

let arr1=[1,1,2];

console.log(removeDuplicates(arr1));

console.log(arr1);

let arr2=[0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(arr2));

console.log(arr2);

let arr3=[1,2,3];

console.log(removeDuplicates(arr3));

console.log(arr3);