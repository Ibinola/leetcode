/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    
    let lookup = {}
    
    for(let char of s){
        lookup[char] ? lookup[char] +=1 : lookup[char] = 1;
    }
        
    for(char of t){
        if(!lookup[char]){
            return false
        } else {
            lookup[char] -= 1;
        }
    }
        
    return true;
};