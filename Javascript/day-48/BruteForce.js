function maxArea(height){

    let maxWater=0;

    for(let i=0;i<height.length;i++){

        for(let j=i+1;j<height.length;j++){

            let width=j-i;

            let h=Math.min(
                height[i],
                height[j]
            );

            let area=width*h;

            maxWater=
            Math.max(
                maxWater,
                area
            );

        }

    }

    return maxWater;

}