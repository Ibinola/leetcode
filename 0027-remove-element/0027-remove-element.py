class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        '''
        k = 2

        [2,2,3,3], val = 3
               i 
             k

        return k -> number of elements != val

    k = 5
        [0,1,3,0,4,0,2,2] -> val = 2
                       i
                   k
        '''

        k = 0

        for i in range(len(nums)):
            if nums[i] != val:
                [nums[k], nums[i]] = [nums[i], nums[k]]
                k += 1
        
        return k
                