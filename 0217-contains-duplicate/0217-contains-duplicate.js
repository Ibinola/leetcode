/**
 * @param {number[]} nums
 * @return {boolean}
 [1,2,3,1]
    {1: 2, 2: 1, 3: 1}
    if value > 1
        return True
    else 
        False
 - loop through to check all values
 - 
 */
var containsDuplicate = function(nums) {
    let unique_map = new Map()

    for (let num of nums){ // [1,2,3,1] {1: 2, 2: 1, 3:1}
        unique_map.set(num, (unique_map.get(num) || 0) + 1)
    }

    for(let i = 0; i < nums.length; i++){ // {1: } [2,14,18,22,22]
        if(unique_map.get(nums[i]) > 1){
            return true
        } 
    }

    return false
};