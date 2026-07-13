function isPalindrome(str){

    let left=0;

    let right=str.length-1;

    while(left<right){

        if(str[left]!==str[right]){

            return false;

        }

        left++;

        right--;

    }

    return true;

}

function validPalindrome(s){

    if(isPalindrome(s)){

        return true;

    }

    for(let i=0;i<s.length;i++){

        let temp=s.slice(0,i)+s.slice(i+1);

        if(isPalindrome(temp)){

            return true;

        }

    }

    return false;

}

// Test Cases

console.log(validPalindrome("abca"));

console.log(validPalindrome("racecar"));

console.log(validPalindrome("abc"));

console.log(validPalindrome("deeee"));