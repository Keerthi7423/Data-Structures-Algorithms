function build(str){

    let stack=[];

    for(let ch of str){

        if(ch!=="#"){

            stack.push(ch);

        }

        else{

            stack.pop();

        }

    }

    return stack.join("");

}

function backspaceCompare(s,t){

    return build(s)===build(t);

}

// Test Cases

console.log(
backspaceCompare("ab#c","ad#c")
);

console.log(
backspaceCompare("ab##","c#d#")
);

console.log(
backspaceCompare("a#c","b")
);

console.log(
backspaceCompare("xy#z","xzz#")
);