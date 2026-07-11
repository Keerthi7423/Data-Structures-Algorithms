function reverseString(s){

    let left=0;

    let right=s.length-1;

    while(left<right){

        let temp=s[left];

        s[left]=s[right];

        s[right]=temp;

        left++;

        right--;

    }

    return s;

}

// Test Cases

console.log(
reverseString(["h","e","l","l","o"])
);

console.log(
reverseString(["H","a","n","n","a","h"])
);

console.log(
reverseString(["A"])
);

console.log(
reverseString(["J","a","v","a"])
);