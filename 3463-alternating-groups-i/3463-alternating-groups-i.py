'''
[0,1,0,0,1]  -> 2
         i
         j

[0,1,0,4]
'''
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        n = len(colors)
        count = 0
    
        for i in range(n):
            if colors[i] != colors[(i + 1) % n] and colors[(i + 1) % n] != colors[(i + 2) % n]:
                count += 1
    
        return count

