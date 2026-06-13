function mySqrt(x){

    let answer=0;

    for(let i=1;i<=x;i++){

        if(i*i<=x){

            answer=i;

        }else{

            break;

        }

    }

    return answer;

}