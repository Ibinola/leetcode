/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /*
    1. 
        input: [-4, -1, 0, 3, 10]
        output: [0,1,9,16,100]
        test case: an empty array? no, not possible
        approach : using the two pointer approach
        
        - create a start pointer which starts at the beginning of the array
        - an end pointer
        - an idx pointer to keep track for the sortArr
            - while loop that keeps the pointers (while the idx > -1)
                - if the start is > end
                    - sortArr[idx--] = square
                        - start++
                        else 
                    - sortArr[idx--] = nums[end] * nums[end]
                        - end--
        - return sortArr;
        time/space : O(N)/O(1)
    */
    
    let start = 0
    let end = nums.length - 1;
    idx = end;
    const sortArr = []
    
        while (idx > -1){
            if(Math.abs(nums[start]) > Math.abs(nums[end])){
                sortArr[idx--] = nums[start] * nums[start];
                start++;
            } else {
                sortArr[idx--] = nums[end] * nums[end];
                end--;
            }
        }
    
    return sortArr;
};