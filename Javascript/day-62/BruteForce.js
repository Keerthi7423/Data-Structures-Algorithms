function search(nums,target){

    for(let num of nums){

        if(num===target){

            return true;

        }

    }

    return false;

}