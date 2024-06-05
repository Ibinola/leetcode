class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}

        for i, number in enumerate(nums):
            nums_map[number] = i

        for i, number in enumerate(nums):
            number_needed = target - number #[3:0,2:1,4:2] -> 6 - 3 = 3
            #   3           [map] and indx(0!=0)
            if number_needed in nums_map and nums_map[number_needed] != i:
                return [i, nums_map[number_needed]]