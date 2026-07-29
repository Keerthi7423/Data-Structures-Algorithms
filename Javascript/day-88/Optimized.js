function minWindow(s, t){

    if(t.length > s.length) return "";

    let need = {};

    for(let ch of t){

        need[ch] = (need[ch] || 0) + 1;

    }

    let left = 0;
    let required = t.length;
    let start = 0;
    let minLen = Infinity;

    for(let right = 0; right < s.length; right++){

        if(need[s[right]] > 0){

            required--;

        }

        need[s[right]] = (need[s[right]] || 0) - 1;

        while(required === 0){

            if(right - left + 1 < minLen){

                minLen = right - left + 1;
                start = left;

            }

            need[s[left]]++;

            if(need[s[left]] > 0){

                required++;

            }

            left++;

        }

    }

    return minLen === Infinity
        ? ""
        : s.substring(start, start + minLen);

}

// Test Cases

console.log(minWindow("ADOBECODEBANC","ABC"));

console.log(minWindow("a","a"));

console.log(minWindow("a","aa"));

console.log(minWindow("aa","aa"));