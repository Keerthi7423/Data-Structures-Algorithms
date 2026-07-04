function removeDuplicates(nums){

    let result=[];

    for(let num of nums){

        if(!result.includes(num)){

            result.push(num);

        }

    }

    return result.length;

}

// Test Cases

let arr1=[1,1,2];

console.log(removeDuplicates(arr1));

let arr2=[0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(arr2));