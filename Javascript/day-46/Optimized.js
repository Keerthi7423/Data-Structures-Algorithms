function minWindow(s, t) {

    let countT = {};
    let window = {};

    for (let char of t) {
        countT[char] =
        (countT[char] || 0) + 1;
    }

    let have = 0;
    let need = Object.keys(countT).length;

    let left = 0;

    let result = [-1, -1];
    let resultLength = Infinity;

    for (let right = 0; right < s.length; right++) {

        let char = s[right];

        window[char] =
        (window[char] || 0) + 1;

        if (
            countT[char] &&
            window[char] === countT[char]
        ) {
            have++;
        }

        while (have === need) {

            if (
                (right - left + 1)
                < resultLength
            ) {

                result =
                [left, right];

                resultLength =
                right - left + 1;
            }

            window[s[left]]--;

            if (
                countT[s[left]] &&
                window[s[left]]
                < countT[s[left]]
            ) {
                have--;
            }

            left++;
        }
    }

    let [l, r] = result;

    return resultLength === Infinity
        ? ""
        : s.slice(l, r + 1);
}