'''
["flower","flow","flight"]
  
'''
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = "" #if no common prexif, if the all started w a diff char

        for i in range(len(strs[0])): # every single character of the first string
            for s in strs: # going through every single string
                if i == len(s) or s[i] != strs[0][i]:
                    return res
            res += strs[0][i]
        
        return res



    