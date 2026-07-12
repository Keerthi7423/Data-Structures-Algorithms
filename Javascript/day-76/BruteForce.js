function reverseWords(s){

    return s

        .trim()

        .split(/\s+/)

        .reverse()

        .join(" ");

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