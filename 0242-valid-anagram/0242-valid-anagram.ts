function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false
    }

    let countS: { [key: string]: number } = {};
    let countT: { [key: string]: number } = {};

    for(let i = 0; i < s.length; i++){
       countS[s[i]] = (countS[s[i]] || 0) + 1;
       countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for(const char in countS){
        if (countS[char] !== (countT[char] || 0)){
            return false
        }
    }

    return true

};