function searchRange(nums,target){

    function lowerBound(){

        let left=0;
        let right=nums.length;

        while(left<right){

            let mid=
            Math.floor(
                (left+right)/2
            );

            if(nums[mid] < target){

                left=mid+1;

            }
            else{

                right=mid;

            }

        }

        return left;

    }

    function upperBound(){

        let left=0;
        let right=nums.length;

        while(left<right){

            let mid=
            Math.floor(
                (left+right)/2
            );

            if(nums[mid] <= target){

                left=mid+1;

            }
            else{

                right=mid;

            }

        }

        return left;

    }

    let first=lowerBound();

    let last=
    upperBound()-1;

    if(
        first===nums.length ||
        nums[first]!==target
    ){

        return [-1,-1];

    }

    return [first,last];

}