//Jpmorgan

function duplicateID(ids){
    for(let t1 = 0; t1 < ids.length; t1++){
        for(let t2 = t1 + 1; t2 < ids.length; t2++){
            if(ids[t1] === ids[t2]){
                return true;
            }
        }
    }
    return false;
}


//Google
function platform(users){
    for(let id1 = 0; id1 < users.length; id1++){
        for(let id2 = id1 + 1; id2 < users.length; id2++){
            if(users[id1] === users[id2]){
                return users[id1];
            }
        }
    }
    return null;
}