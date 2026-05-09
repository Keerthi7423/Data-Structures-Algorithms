function isPrice(price, budget){
    let account = {};

    for(let p = 0; p< price.length; p++){
        let savings = budget - price[p];
        if(account[savings] !== undefined){
            return [account[savings], p]
        }
        account[price[p]] = p;
    }
}