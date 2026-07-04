function removeElement(nums,val){

    let result=[];

    for(let num of nums){

        if(num!==val){

            result.push(num);

        }

    }

    return result.length;

}

// Test Cases

console.log(
removeElement([3,2,2,3],3)
);

console.log(
removeElement([0,1,2,2,3,0,4,2],2)
);

console.log(
removeElement([1,1,1],1)
);