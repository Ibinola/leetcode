class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_set = {}

        for i in range(len(nums)):
            difference = target - nums[i]
            if difference in hash_set:
                return [i, hash_set[difference]]  
            else:
                hash_set[nums[i]] = i

