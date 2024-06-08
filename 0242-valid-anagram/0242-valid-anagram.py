'''
if they are not the same length, return false

anagram -> {a:2, n: 1, g: 1, r: 1, m: 1}
nagaram -> {a: 2, n: 1, g: 1, r: 1, m: 1}

rat -> {r: 1, a: 1, t: 1}
car -> {c: 1, a: 1, r: 1}
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_map = {}
        t_map = {}

        for i, element in enumerate(s):
            if element not in s_map:
                s_map[element] = 1
            else:
                s_map[element] += 1
        
        for i, element in enumerate(t):
            if element not in t_map:
                t_map[element] = 1
            else:
                t_map[element] += 1
        
        if s_map == t_map:
            return True
        else: 
            return False