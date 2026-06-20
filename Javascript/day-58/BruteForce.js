function peakIndexInMountainArray(arr){

    let maxIndex=0;

    for(let i=1;i<arr.length;i++){

        if(arr[i]>arr[maxIndex]){

            maxIndex=i;

        }

    }

    return maxIndex;

}