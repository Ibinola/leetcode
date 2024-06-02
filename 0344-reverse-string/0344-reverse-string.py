# understand the problem
# this is an array of elements(characters)
# do not return ?, modify s in-place instead??
# 'hello' -> reverse -> olleh -> []

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s.reverse()