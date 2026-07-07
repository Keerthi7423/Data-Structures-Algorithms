function backspaceCompare(s,t){

    let i=s.length-1;

    let j=t.length-1;

    while(i>=0 || j>=0){

        let skipS=0;

        while(i>=0){

            if(s[i]==="#"){

                skipS++;

                i--;

            }

            else if(skipS>0){

                skipS--;

                i--;

            }

            else{

                break;

            }

        }

        let skipT=0;

        while(j>=0){

            if(t[j]==="#"){

                skipT++;

                j--;

            }

            else if(skipT>0){

                skipT--;

                j--;

            }

            else{

                break;

            }

        }

        if(s[i]!==t[j]){

            return false;

        }

        i--;

        j--;

    }

    return true;

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

console.log(
backspaceCompare("bxj##tw","bxo#j##tw")
);