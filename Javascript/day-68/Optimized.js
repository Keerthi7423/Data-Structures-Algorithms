function maxArea(height){

    let left=0;

    let right=
    height.length-1;

    let maxWater=0;

    while(left<right){

        let width=
        right-left;

        let currentHeight=
        Math.min(
            height[left],
            height[right]
        );

        let area=
        width*currentHeight;

        maxWater=
        Math.max(
            maxWater,
            area
        );

        if(
            height[left]
            <
            height[right]
        ){

            left++;

        }

        else{

            right--;

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

console.log(
maxArea([1,2,1])
);