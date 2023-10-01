/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   /*
    we use the two pointers approach to reverse the characters in each word. First the string is split into an array of words. The array is iterated over and each word is split into an array of characters. The character positions are swapped using two pointers. Finally the array of words is joined and the string is returned.
   */

   let wordArr = s.split(" ");
   for(let i = 0; i < wordArr.length; i++){
       let charArr = wordArr[i].split(""); // ["G", "o", "d"]
        start = 0;
        end = charArr.length - 1;

       while(start < end) {
           [charArr[start], charArr[end]] = [charArr[end], charArr[start]]
           start++;
           end--;
       }

       wordArr[i] = charArr.join("");
   }

   return wordArr.join(" ")
};