function checkInclusion(s1,s2){

    if(s1.length>s2.length){
        return false;
    }

    let count1=new Array(26).fill(0);
    let count2=new Array(26).fill(0);

    for(let char of s1){
        count1[char.charCodeAt(0)-97]++;
    }

    for(let i=0;i<s1.length;i++){
        count2[s2.charCodeAt(i)-97]++;
    }

    if(isSame(count1,count2)){
        return true;
    }

    for(let i=s1.length;i<s2.length;i++){

        count2[s2.charCodeAt(i)-97]++;

        count2[
            s2.charCodeAt(i-s1.length)-97
        ]--;

        if(isSame(count1,count2)){
            return true;
        }
    }

    return false;
}

function isSame(a,b){

    for(let i=0;i<26;i++){

        if(a[i]!==b[i]){
            return false;
        }

    }

    return true;
}