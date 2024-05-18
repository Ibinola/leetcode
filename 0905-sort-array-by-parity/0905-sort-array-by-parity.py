# space = O(1) time = O(n)
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        left_pointer = 0 # O(1)
        right_pointer = len(nums) - 1 #O(1)
            # [0,1,2], [3, 1, 2, 4], [4, 2, 1, 3], [4, 2, 3, 1]
            #           i        r        i r          i  r
        while left_pointer < right_pointer: #O(N)
            if nums[left_pointer] % 2 > nums[right_pointer] % 2:
                nums[left_pointer], nums[right_pointer] = nums[right_pointer], nums[left_pointer] #O(1)
            
            if nums[left_pointer] % 2 == 0: #O(1)
                left_pointer += 1
            
            if nums[right_pointer] % 2 == 1: #O(1)
                right_pointer -= 1

        return nums  