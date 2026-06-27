function isPalindrome(s){

    let clean = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g,"");

    let reverse =
        clean
        .split("")
        .reverse()
        .join("");

    return clean===reverse;

}