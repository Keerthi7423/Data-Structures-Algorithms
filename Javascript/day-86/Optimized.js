
function checkInclusion(s1, s2){

    if(s1.length > s2.length){

        return false;

    }

    let s1Freq = new Array(26).fill(0);

    let windowFreq = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++){

        s1Freq[s1.charCodeAt(i) - 97]++;

        windowFreq[s2.charCodeAt(i) - 97]++;

    }

    const isEqual = () =>{

        for(let i = 0; i < 26; i++){

            if(s1Freq[i] !== windowFreq[i]){

                return false;

            }

        }

        return true;

    };

    if(isEqual()){

        return true;

    }

    for(let right = s1.length; right < s2.length; right++){

        windowFreq[s2.charCodeAt(right) - 97]++;

        windowFreq[s2.charCodeAt(right - s1.length) - 97]--;

        if(isEqual()){

            return true;

        }

    }

    return false;

}

// Test Cases

console.log(checkInclusion("ab","eidbaooo"));

console.log(checkInclusion("ab","eidboaoo"));

console.log(checkInclusion("adc","dcda"));

console.log(checkInclusion("hello","ooolleoooleh"));

console.log(checkInclusion("xyz","afdgzyxksldfm"));