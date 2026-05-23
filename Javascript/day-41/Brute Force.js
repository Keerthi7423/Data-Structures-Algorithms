function maxProduct(nums){

    let maxProduct=-Infinity;

    for(let i=0;i<nums.length;i++){

        let product=1;

        for(let j=i;j<nums.length;j++){

            product *= nums[j];

            maxProduct=Math.max(
                maxProduct,
                product
            );

        }
    }

    return maxProduct;
}