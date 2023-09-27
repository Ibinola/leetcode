/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCaseString = s.toLowerCase();
    let nonAlphanumericChar = lowerCaseString.replace(/[^a-z0-9]/g, ''); 
    // amanaplanacanalpanama
    let start = 0;
    let end = nonAlphanumericChar.length - 1;

    while(start <= end){
        if(nonAlphanumericChar[start] === nonAlphanumericChar[end]){
            start++;
            end--
        }
        else {
            return false;
        }
    }

    return true;

};