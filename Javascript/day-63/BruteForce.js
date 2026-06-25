function findClosestElements(arr,k,x){

    return arr
    .slice()
    .sort((a,b)=>{

        let diffA=
        Math.abs(a-x);

        let diffB=
        Math.abs(b-x);

        if(diffA===diffB){

            return a-b;

        }

        return diffA-diffB;

    })
    .slice(0,k)
    .sort((a,b)=>a-b);

}