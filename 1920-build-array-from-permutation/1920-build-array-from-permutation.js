/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var ans = []
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]])
    }
    return ans;
};




/*
Problem solving technique
- understand the problem
    - repeat the problem
    - ask clarifying questions (edge cases, assumptions)
- think of edge cases | unhappy cases / constraints
    - for example an array (can we have an empty array)
    - how long/big is the array
        
- Approach 1 (brute force)
- Approach n
- Write out the agreed approach
- DRY Test(errors, test)

Given: an array "nums [0,2,1,5,3,4]""
Return: build an array "ans of the same length -> where ans[i] = nums[nums[i]]"  
Example:  Input:  nums [0,2,1,5,3,4]
            Output: [0,1,2,4,5,3]

Assumptions: - To build an array off nums using ans[i] = nums[nums[i]]
                - ans[i] = nums[num[i]]
ans[i]= [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]] 

 - [nums[0], nums[2], numa[1], nums[5], nums[3], nums[4]]
  ans[i] = [0,1,2,4,5,3]
                    

Pseudocode:
 -  Iterate through each element in nums array, with the condition i < nums.length
    - Declare an empty array of ans[]
    - push. each element into ans[] at each iteration, we equate that equation to ans[i]
    - return ans
    
Code: 
    - for i = 0; i < nums.length; i++     [0,2,1,5,3,4]
        - var ans = [0, 1, 2]
        - ans.push(nums[nums[i]])   ans.push(nums[nums[i]]) -> ans.pusj(nums[nums[2]]) -> ans.push(nums[1]) -> ans.push()
    - return ans;

*/