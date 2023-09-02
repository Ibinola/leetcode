/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let map = {};

  for(let num of nums){
    if(map[num]){
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

    for(let num of nums){
      if(map[num] >= 2){
        return true;
      } 
    }

    return false;
};