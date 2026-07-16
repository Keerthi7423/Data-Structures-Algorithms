function sortColors(nums){

    let zero=0;

    let one=0;

    let two=0;

    for(let num of nums){

        if(num===0){

            zero++;

        }

        else if(num===1){

            one++;

        }

        else{

            two++;

        }

    }

    let index=0;

    while(zero--){

        nums[index++]=0;

    }

    while(one--){

        nums[index++]=1;

    }

    while(two--){

        nums[index++]=2;

    }

    return nums;

}

// Test Cases

console.log(sortColors([2,0,2,1,1,0]));

console.log(sortColors([2,0,1]));

console.log(sortColors([0]));

console.log(sortColors([1,2,0]));