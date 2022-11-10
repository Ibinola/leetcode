/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currentSum = Number.NEGATIVE_INFINITY;        
    
    for(let i = 0; i < nums.length; i++){
        const number = nums[i];
        currentSum += number;
        
        if (number > currentSum) {
            currentSum = number;
        } 
        
        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
    
    
    return maxSum;

};