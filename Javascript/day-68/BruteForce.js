function maxArea(height){

    let maxWater=0;

    for(let i=0;i<height.length;i++){

        for(let j=i+1;j<height.length;j++){

            let width=j-i;

            let currentHeight=
            Math.min(
                height[i],
                height[j]
            );

            let area=
            width*currentHeight;

            maxWater=
            Math.max(
                maxWater,
                area
            );

        }

    }

    return maxWater;

}

// Test Cases

console.log(
maxArea([1,8,6,2,5,4,8,3,7])
);

console.log(
maxArea([1,1])
);

console.log(
maxArea([4,3,2,1,4])
);