'''
if they are not the same length, return false

anagram -> {a:2, n: 1, g: 1, r: 1, m: 1}
nagaram -> {a: 2, n: 1, g: 1, r: 1, m: 1}

rat -> {r: 1, a: 1, t: 1}
car -> {c: 1, a: 1, r: 1}

time complexity - O(n + m)
space complexity - O(n)
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        countS, countT = {}, {} # {r: 1, a: 1}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT
