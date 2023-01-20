/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    // 5
//     let element_sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         element_sum += nums[i];
//     }
    
//     let digit_sum_string = nums.toString().split("")
//     let digit_sum_number = digit_sum_string.map(Number);
//     let digit_sum = 0;
//     let newArr = []
//     for(let i = 0; i < digit_sum.length; i++){
//         if(digit_sum[i] == Number){
//             newArr.push(digit_sum[i])
//         } 
//     }
//     console.log(newArr)
    
    let element_sum = 0;
    for(let i = 0; i < nums.length; i++){
        element_sum += nums[i]
    }
   
    let digit_sum_array = nums.join("").split("")
    let digit_sum = 0;
    let length = digit_sum_array.length;
    for(let i = 0; i < length; i++){
        digit_sum += parseInt(digit_sum_array[i])
    }
    
    const difference = element_sum - digit_sum
    return difference;
    
}; 