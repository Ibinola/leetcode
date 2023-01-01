/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // input :array of numbers, 
    // output : boolean: true if an element from the array appears at least twice, false if every element is distinct.

    // [1,2,3,1]
    //  0 1 2 3

    //  1 == 2,3, 1
    //  - true

    //  - iterate through each element, and on each element iterate through till the end of the array again, compare each element at each iteration. 
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }

    return false;
};