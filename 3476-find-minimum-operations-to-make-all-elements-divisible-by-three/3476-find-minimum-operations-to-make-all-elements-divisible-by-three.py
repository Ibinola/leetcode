'''
operation = 3
[1,2,3,4]
     i
 1 - 1 or 1 + 1 // 3 == 0
 1 - 2 or 1 + 2 // 3 == 0
 1 - 3 or 1 + 3 // 3
 1 - 4 or 1 + 4 // 3 == 0

  operations = 0
        for index, element in enumerate(nums):
            if (1 - element or 1 + element) // 3:
                operations += 1
        
        return operations

[3,6,9]
 1 + 3 or 1 - 3 // 3   = 4 // 3 or 
 6 + 1 or 6 - 1 // 3
 9 + 1 or 9 - 1 // 3
return the num of operations to make all elements of nums divisible by 3

operations = 0
'''

class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        operations = 0
        for index, element in enumerate(nums):
            if (element - 1) % 3 == 0 or (element + 1) % 3 == 0:
                operations += 1
        
        return operations
        