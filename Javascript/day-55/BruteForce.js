function isPerfectSquare(num){

    for(let i=1;i<=num;i++){

        if(i*i===num){

            return true;

        }

        if(i*i>num){

            return false;

        }

    }

    return false;

}