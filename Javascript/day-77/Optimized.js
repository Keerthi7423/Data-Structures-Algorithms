function validPalindrome(s){

    function isPalindrome(left,right){

        while(left<right){

            if(s[left]!==s[right]){

                return false;

            }

            left++;

            right--;

        }

        return true;

    }

    let left=0;

    let right=s.length-1;

    while(left<right){

        if(s[left]!==s[right]){

            return isPalindrome(left+1,right) ||

                   isPalindrome(left,right-1);

        }

        left++;

        right--;

    }

    return true;

}

// Test Cases

console.log(validPalindrome("abca"));

console.log(validPalindrome("racecar"));

console.log(validPalindrome("abc"));

console.log(validPalindrome("deeee"));

console.log(validPalindrome("cbbcc"));