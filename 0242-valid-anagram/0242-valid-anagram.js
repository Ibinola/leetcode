/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; 

    let charCount = {};

    /*
        anagram
        charCount[a] = 0
        charCount[]

        {
            a : 1
        }
        
        
        {
            n : 0
        }
    */

    for (let i = 0; i < s.length; i++) { 
        charCount[s[i]] = (charCount[s[i]] || 0) + 1; // anagram 
        charCount[t[i]] = (charCount[t[i]] || 0) - 1; // nagaram
    }

    for (let count in charCount) {
        if (charCount[count] !== 0) {
            return false;
        }
    }

    return true;
};