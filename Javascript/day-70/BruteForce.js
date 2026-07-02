function fourSum(nums,target){

    let result=[];

    let seen=new Set();

    for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<nums.length;j++){

            for(let k=j+1;k<nums.length;k++){

                for(let l=k+1;l<nums.length;l++){

                    if(
                        nums[i]+nums[j]+nums[k]+nums[l]
                        ===target
                    ){

                        let quad=[
                            nums[i],
                            nums[j],
                            nums[k],
                            nums[l]
                        ].sort((a,b)=>a-b);

                        let key=quad.join(",");

                        if(!seen.has(key)){

                            seen.add(key);

                            result.push(quad);

                        }

                    }

                }

            }

        }

    }

    return result;

}

// Test Cases

console.log(
fourSum([1,0,-1,0,-2,2],0)
);

console.log(
fourSum([2,2,2,2,2],8)
);