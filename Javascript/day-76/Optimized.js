function reverseWords(s){

    let words=[];

    let i=0;

    while(i<s.length){

        while(i<s.length && s[i]===" "){

            i++;

        }

        let word="";

        while(i<s.length && s[i]!==" "){

            word+=s[i];

            i++;

        }

        if(word.length>0){

            words.push(word);

        }

    }

    words.reverse();

    return words.join(" ");

}

// Test Cases

console.log(
reverseWords("the sky is blue")
);

console.log(
reverseWords("  hello world  ")
);

console.log(
reverseWords("a good   example")
);

console.log(
reverseWords(" ChatGPT   is   awesome ")
);