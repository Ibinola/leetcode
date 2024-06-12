'''
aaddccc

adcccda
adcccda
'''

class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq = {}
        res = 0

        for c in s:
            freq[c] = freq.get(c, 0) + 1 # {a: 1, b: 1, c: 4, d: 2}
            if (freq[c] % 2) == 0:
                res += 2
        
        for c in s:
            if freq[c] % 2 == 1:
                res += 1
                break
        

        return res
      