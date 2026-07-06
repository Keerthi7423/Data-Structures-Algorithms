function moveZeroes(nums){

    let result=[];

    let zeroCount=0;

    for(let num of nums){

        if(num!==0){

            result.push(num);

        }
        else{

            zeroCount++;

        }

    }

    while(zeroCount>0){

        result.push(0);

        zeroCount--;

    }

    return result;

}

// Test Cases

console.log(moveZeroes([0,1,0,3,12]));

console.log(moveZeroes([0]));

console.log(moveZeroes([1,2,3]));

console.log(moveZeroes([0,0,1]));