function shipWithinDays(weights,days){

    let maxWeight=
    Math.max(...weights);

    let totalWeight=
    weights.reduce(
        (a,b)=>a+b,0
    );

    for(
        let capacity=maxWeight;
        capacity<=totalWeight;
        capacity++
    ){

        let requiredDays=1;

        let currentLoad=0;

        for(let weight of weights){

            if(
                currentLoad+weight
                > capacity
            ){

                requiredDays++;

                currentLoad=0;

            }

            currentLoad+=weight;

        }

        if(requiredDays<=days){

            return capacity;

        }

    }

}