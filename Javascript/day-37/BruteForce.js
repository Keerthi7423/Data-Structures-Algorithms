function topKFrequent(nums,k){
    let unique = [...new Set(nums)];
    let freq = [];

    for(let num of unique){
        let count = 0;

        for(let val of nums){
            if(num === val){
                count ++;
            }
        }
        freq.push([num,count]);
    }
    freq.sort((a,b) => b[1] - a[1]);

    return freq.slice(0,k).map(item=>item[0]);
}