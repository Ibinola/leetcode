/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
   let oddIdx = 0; // index to keep track of the 'first encounterd number'
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){ // swap with the odd number if we find an even num,bubbling up even numbers
            [nums[oddIdx], nums[i]] = [nums[i], nums[oddIdx]]
            oddIdx++;
        }
    }
    
    return nums;
};