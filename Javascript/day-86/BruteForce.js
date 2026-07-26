function checkInclusion(s1, s2){

    let target = s1.split('').sort().join('');

    let k = s1.length;

    for(let i = 0; i <= s2.length - k; i++){

        let window = s2.slice(i, i + k);

        if(window.split('').sort().join('') === target){

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