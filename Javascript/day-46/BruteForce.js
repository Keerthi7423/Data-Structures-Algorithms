function minWindow(s, t) {

    let result = "";

    for (let i = 0; i < s.length; i++) {

        let freq = {};

        for (let char of t) {
            freq[char] = (freq[char] || 0) + 1;
        }

        let remaining = t.length;

        for (let j = i; j < s.length; j++) {

            let char = s[j];

            if (freq[char] > 0) {
                remaining--;
            }

            freq[char]--;

            if (remaining === 0) {

                let window =
                s.substring(i, j + 1);

                if (
                    result === "" ||
                    window.length < result.length
                ) {
                    result = window;
                }

                break;
            }
        }
    }

    return result;
}