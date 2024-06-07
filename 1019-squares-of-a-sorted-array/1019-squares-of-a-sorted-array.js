/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   return nums.map((num) => {
        return num * num
    }).sort((a, b) => a - b)

    
};