function findAnagrams(s, p){

    let result = [];

    let target = p.split('').sort().join('');

    let k = p.length;

    for(let i = 0; i <= s.length-k; i++){

        let window = s.slice(i,i+k);

        if(window.split('').sort().join('') === target){

            result.push(i);

        }

    }

    return result;

}

// Test Cases

console.log(findAnagrams("cbaebabacd","abc"));

console.log(findAnagrams("abab","ab"));

console.log(findAnagrams("aaaa","aa"));

console.log(findAnagrams("abcdef","gh"));