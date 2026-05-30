function checkInclusion(s1, s2) {

    function isPermutation(str1, str2) {

        let arr1 = str1.split('').sort().join('');
        let arr2 = str2.split('').sort().join('');

        return arr1 === arr2;
    }

    let k = s1.length;

    for (let i = 0; i <= s2.length - k; i++) {

        let window = s2.substring(i, i + k);

        if (isPermutation(s1, window)) {
            return true;
        }
    }

    return false;
}