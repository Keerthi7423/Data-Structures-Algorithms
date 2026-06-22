function minEatingSpeed(piles,h){

    let maxPile=Math.max(...piles);

    for(let speed=1;speed<=maxPile;speed++){

        let hours=0;

        for(let pile of piles){

            hours += Math.ceil(
                pile/speed
            );

        }

        if(hours<=h){

            return speed;

        }

    }

}