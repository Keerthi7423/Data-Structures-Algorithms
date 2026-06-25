function findClosestElements(arr,k,x){

    let left=0;

    let right=
    arr.length-1;

    while(
        right-left+1
        > k
    ){

        if(
            Math.abs(
                arr[left]-x
            )
            >
            Math.abs(
                arr[right]-x
            )
        ){

            left++;

        }
        else{

            right--;

        }

    }

    return arr.slice(
        left,
        right+1
    );

}