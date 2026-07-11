function reverseString(s){

    let result=[];

    for(let i=s.length-1;i>=0;i--){

        result.push(s[i]);

    }

    return result;

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