class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0

        for index, element in enumerate(nums):
            if element != val:
                nums[k] = element
                k += 1
        
        return k

        