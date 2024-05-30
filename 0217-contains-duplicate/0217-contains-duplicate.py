class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        number_counts = {}

        for number in nums:
            if number not in number_counts:
                number_counts[number] = 1
            else:
                return True
        
        return False