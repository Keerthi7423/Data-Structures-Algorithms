//Jpmorgan
function duplicateID(ids){
    const seen = new Set();

    for(let id of ids){
        if(seen.has(id)){
            return true;
        }
        seen.add(id);
    }
    return false;
}


//Google

function platform(users){
    let verify = new Set();

    for(let id of users){
        if(verify.has(id)){
            return true;
        }
        verify.add(id);
    }
    return false;
}