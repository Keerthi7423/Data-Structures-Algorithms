function shipWithinDays(weights,days){

    let left=
    Math.max(...weights);

    let right=
    weights.reduce(
        (a,b)=>a+b,0
    );

    let answer=right;

    while(left<=right){

        let mid=
        Math.floor(
            (left+right)/2
        );

        let requiredDays=1;

        let currentLoad=0;

        for(let weight of weights){

            if(
                currentLoad+weight
                > mid
            ){

                requiredDays++;

                currentLoad=0;

            }

            currentLoad+=weight;

        }

        if(requiredDays<=days){

            answer=mid;

            right=mid-1;

        }
        else{

            left=mid+1;

        }

    }

    return answer;

}