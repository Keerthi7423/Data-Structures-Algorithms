function characterReplacement(s, k){

    let answer = 0;

    for(let i = 0; i < s.length; i++){

        let freq = {};

        let maxFreq = 0;

        for(let j = i; j < s.length; j++){

            freq[s[j]] = (freq[s[j]] || 0) + 1;

            maxFreq = Math.max(maxFreq, freq[s[j]]);

            let windowLength = j - i + 1;

            if(windowLength - maxFreq <= k){

                answer = Math.max(answer, windowLength);

            }

        }

    }

    return answer;

}

// Test Cases

console.log(characterReplacement("AABABBA",1));

console.log(characterReplacement("ABAB",2));

console.log(characterReplacement("AAAA",2));

console.log(characterReplacement("ABCDE",1));