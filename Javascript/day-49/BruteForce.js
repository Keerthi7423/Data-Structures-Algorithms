function trap(height){

    let water=0;

    for(let i=0;i<height.length;i++){

        let leftMax=0;

        let rightMax=0;

        for(let l=0;l<=i;l++){

            leftMax=
            Math.max(
                leftMax,
                height[l]
            );

        }

        for(let r=i;r<height.length;r++){

            rightMax=
            Math.max(
                rightMax,
                height[r]
            );

        }

        water +=
        Math.min(leftMax,rightMax)
        - height[i];

    }

    return water;

}

// 9. NEW ALGORITHM → LEFT MAX & RIGHT MAX


// function trap(height){

//     let n=height.length;

//     let leftMax=
//     new Array(n);

//     let rightMax=
//     new Array(n);

//     leftMax[0]=height[0];

//     for(let i=1;i<n;i++){

//         leftMax[i]=
//         Math.max(
//             leftMax[i-1],
//             height[i]
//         );

//     }

//     rightMax[n-1]=height[n-1];

//     for(let i=n-2;i>=0;i--){

//         rightMax[i]=
//         Math.max(
//             rightMax[i+1],
//             height[i]
//         );

//     }

//     let water=0;

//     for(let i=0;i<n;i++){

//         water +=
//         Math.min(
//             leftMax[i],
//             rightMax[i]
//         ) - height[i];

//     }

//     return water;

// }




