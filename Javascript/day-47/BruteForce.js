function threeSum(nums){

    let result=[];

    let seen=new Set();

    for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<nums.length;j++){

            for(let k=j+1;k<nums.length;k++){

                if(
                    nums[i]+nums[j]+nums[k]===0
                ){

                    let triplet=[
                        nums[i],
                        nums[j],
                        nums[k]
                    ].sort((a,b)=>a-b);

                    let key=
                    triplet.join(",");

                    if(!seen.has(key)){

                        seen.add(key);

                        result.push(triplet);

                    }

                }

            }

        }

    }

    return result;
}