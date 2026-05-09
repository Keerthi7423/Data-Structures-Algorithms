function isAnagram(s,t){
    if(s.length !== t.length) {
        return false;
    }
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}