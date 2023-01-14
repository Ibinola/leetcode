/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    /*
    NB: my solution must use constant extra space ? just to clarify does this mean constant space, or extra space ? 
        assumptions
        - can we have floating point numbers ?
        - can we have duplicates ? no it's non-decreasing
    */
    let index1 = 0
    let index2 = numbers.length - 1;

    while (index1 < index2){
        let sum = numbers[index1] + numbers[index2]
        if(sum == target){
            return [index1+1, index2+1];
        }

        if(sum > target){
            index2--
        }

        if(sum < target){
            index1++
        }
    }

    return -1;
};