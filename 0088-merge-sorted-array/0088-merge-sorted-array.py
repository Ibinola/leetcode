'''
 i = m - 1
 j = n - 1
  for i in (m)"
    num1[i] = nums2[i - n]  // [1,2,3,2,5,6]
'''

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1[m:] = nums2
        nums1.sort()
        
