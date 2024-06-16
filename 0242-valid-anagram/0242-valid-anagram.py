'''
can i sort, aplhabeticallu ?
'aaagram'

'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s, sorted_t = ''.join(sorted(s)), ''.join(sorted(t))

        return sorted_s == sorted_t

