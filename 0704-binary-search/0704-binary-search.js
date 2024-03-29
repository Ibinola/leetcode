/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right)/2)
    
    while(nums[left] <= nums[right]){
        if(nums[mid] == target){
            return mid;
        } 
        
        if (nums[mid] < target) { 
            left = mid + 1;
        }
        
        if (nums[mid] > target) {
            right = mid - 1;
        }

        mid = Math.floor((left + right)/ 2)
    }

    return -1;

};