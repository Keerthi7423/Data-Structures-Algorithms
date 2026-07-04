function removeElement(nums,val){

    let write=0;

    for(let read=0;read<nums.length;read++){

        if(nums[read]!==val){

            nums[write]=nums[read];

            write++;

        }

    }

    return write;

}

// Test Cases

let arr1=[3,2,2,3];

console.log(removeElement(arr1,3));

console.log(arr1);

let arr2=[0,1,2,2,3,0,4,2];

console.log(removeElement(arr2,2));

console.log(arr2);

let arr3=[1,1,1];

console.log(removeElement(arr3,1));

console.log(arr3);

let arr4=[4,5,6];

console.log(removeElement(arr4,5));

console.log(arr4);