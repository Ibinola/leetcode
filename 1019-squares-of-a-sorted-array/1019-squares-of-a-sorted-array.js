/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
//    return nums.map((num) => {
//         return num * num
//     }).sort((a, b) => a - b)

    const num = []
    for (let i = 0; i < nums.length; i++){
         num.push(nums[i] * nums[i])
    }

    return num.sort((a, b) => a - b)
    
};