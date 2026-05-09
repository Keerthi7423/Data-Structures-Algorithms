function isPrice(price, budget){
    for(let i = 0; i < price.length; i++){
        for(let j = i + 1; j < price.length; j++){
            if(price[i] + price[j] === budget){
                return [i, j]
            }
        }
    }
    return []
}
