// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {
//    return nums.map((num) => {
//         return num * num
//     }).sort((a, b) => a - b)

//     // const num = []
//     // for (let i = 0; i < nums.length; i++){
//     //      num.push(nums[i] * nums[i])
//     // }

//     // return num.sort((a, b) => a - b)
    
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans=[];
for(let i=0;i<nums.length;i++){
    ans.push(nums[i]*nums[i]);
}


function mergeSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }
   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);
   return merge(mergeSort(left), mergeSort(right));
}
 
//function to merge the left and right elements
function merge(left, right) {
   const result = [];
    
   while (left.length && right.length) {
      if (left[0] < right[0]) {
         result.push(left.shift());
      } else {
         result.push(right.shift());
      }
   }
    
   return [...result, ...left, ...right];
}

ans=(mergeSort(ans));
return(ans)
};