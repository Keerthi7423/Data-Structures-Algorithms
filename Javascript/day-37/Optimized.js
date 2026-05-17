// //Hashmap
// function topKFrequent(nums, k) {
//     let map = {};

//     for(let num of nums){
//         map[num] = (map[num] || 0) + 1;
//     }
//     let sorted = Object.entries(map).sort((a,b)=>b[1]-a[1]);

//     return sorted
//         .slice(0,k)
//         .map(item=>Number(item[0]));
// }

// BucketSort

function topKFrequent(nums, k) {
    let map = {};

    let bucket = Array(nums.length+1)
        .fill()
        .map(()=>[]);

        for(let num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        for(let num in map){
            let freq = map[num];
            bucket[freq].push(Number(num));
        }

        let result = [];

        for(let i = bucket.length-1;i>=0;i--){
            for(let num of bucket[i]){
                result.push(num);

                if(result.length === k){
                    return result;
                }
        }
    }

}