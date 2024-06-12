/**
 * @param {string} s
 * @return {number}
 abccccd

 dbccaccdb

aa 

{a:1, b: 3, c:4: d: 2} 
- ccbbbddcc
- dccbbbccd
- dccbbbccd
- 
 */
var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};