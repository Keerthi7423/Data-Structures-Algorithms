function findMedianSortedArrays(nums1,nums2){

    let merged=[
        ...nums1,
        ...nums2
    ];

    merged.sort((a,b)=>a-b);

    let n=merged.length;

    if(n%2===1){

        return merged[
            Math.floor(n/2)
        ];

    }

    return (

        merged[n/2-1]

        +

        merged[n/2]

    )/2;

}