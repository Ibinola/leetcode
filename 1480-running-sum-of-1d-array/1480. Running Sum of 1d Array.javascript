/**
 * @param {number[]} nums
 * @return {number[]}

 */
var runningSum = function(nums) {
    let ans = 0
    let arr = [] // [1,3, 6,10]

    for(let i = 0; i < nums.length; i++){ // [1,2,3,4]
        ans += nums[i]
        arr.push(ans)
    }
    return arr

};