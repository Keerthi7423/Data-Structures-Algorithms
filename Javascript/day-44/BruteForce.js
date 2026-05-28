function characterReplacement(s,k){

    let maxLength=0;

    for(let i=0;i<s.length;i++){

        let count={};

        let maxFreq=0;

        for(let j=i;j<s.length;j++){

            count[s[j]]=
            (count[s[j]]||0)+1;

            maxFreq=
            Math.max(
                maxFreq,
                count[s[j]]
            );

            let windowLength=
            j-i+1;

            let replacements=
            windowLength-maxFreq;

            if(replacements<=k){

                maxLength=
                Math.max(
                    maxLength,
                    windowLength
                );

            }

        }

    }

    return maxLength;

}