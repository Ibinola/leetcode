class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}

        for i, number in enumerate(nums):
            nums_map[number] = i

        for i, number in enumerate(nums):
            number_needed = target - number #[2,7,11,15] -> 6
            if number_needed in nums_map and nums_map[number_needed] != i:
                return [i, nums_map[number_needed]]