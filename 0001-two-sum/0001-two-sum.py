# ````
# [2,7,11,15] target = 9 -> [0, 1]
# 
#  {2: 0, 7: 1, 11: 2, 15: 3}
#  2 - 9 = 7
# 7 
# ````
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        number_map = {}

        for i, number in enumerate(nums):
            number_map[number] = i #{3: 0,2: 1,4: 2]}
        
        for i, number in enumerate(nums): #3
            compliment = target - number # 6 - 2 = 4
            if compliment in number_map and number_map[compliment] != i:
                return [i, number_map[compliment]]
        

        