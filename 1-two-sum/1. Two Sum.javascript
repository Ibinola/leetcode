/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map = {};
/*
[2,7,11,15]
target = 9;

-------
value = 2;
index = 0;
remainder = 9 - 2 = 7;


map[key: 7] = value: ; i
hashtable
{key = 2: value = 0}
key is mapped to a value,
the key gives me access to the value.

*/
   for(let index = 0; index < nums.length; index++){
       let value = nums[index];
       let remainder = target - value;

       if(map[remainder] !== undefined){ // this checks is there's current key in the hashmap
           return [map[remainder], index];
       } else {
           map[value] = index;
       }
   }
};