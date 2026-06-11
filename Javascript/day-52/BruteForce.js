var solution = function(isBadVersion){

    return function(n){

        for(let i=1;i<=n;i++){

            if(isBadVersion(i)){

                return i;

            }

        }

    };

};