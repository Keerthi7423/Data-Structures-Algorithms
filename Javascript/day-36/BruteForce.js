function groupAnagrams(strs) {
    let result = [];
    let visited = new Array(strs.length).fill(false);

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;

        let group = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (
                strs[i].split('').sort().join('') ===
                strs[j].split('').sort().join('')
            ) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }

        result.push(group);
    }

    return result;
}