/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var tempArr = []
    for(let i = 0; i < nums.length; i++){
        tempArr.push(nums[i]);
    }
    var concat = tempArr.concat(nums)
    return concat;
};