function findAnagrams(s,p){

    let result = [];

    if(p.length > s.length){

        return result;

    }

    let pFreq = new Array(26).fill(0);

    let windowFreq = new Array(26).fill(0);

    for(let i=0;i<p.length;i++){

        pFreq[p.charCodeAt(i)-97]++;

        windowFreq[s.charCodeAt(i)-97]++;

    }

    function equal(){

        for(let i=0;i<26;i++){

            if(pFreq[i]!==windowFreq[i]){

                return false;

            }

        }

        return true;

    }

    if(equal()){

        result.push(0);

    }

    for(let right=p.length; right<s.length; right++){

        windowFreq[s.charCodeAt(right)-97]++;

        windowFreq[s.charCodeAt(right-p.length)-97]--;

        if(equal()){

            result.push(right-p.length+1);

        }

    }

    return result;

}

// Test Cases

console.log(findAnagrams("cbaebabacd","abc"));

console.log(findAnagrams("abab","ab"));

console.log(findAnagrams("aaaa","aa"));

console.log(findAnagrams("abcdef","gh"));

console.log(findAnagrams("baa","aa"));