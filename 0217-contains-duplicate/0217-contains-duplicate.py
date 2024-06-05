"""
[1,2,3,1] -> true
{1: 1, 2: 1, 3: 1, 1 return false}

[1,2,3,4]
"""
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums_map = {} # {1: 1, 2: 1, 3: 1, 4: 1}

        for i, element in enumerate(nums): # {}
            if element not in nums_map:
                nums_map[element] = 1
            else:
                return True
        
        return False
        