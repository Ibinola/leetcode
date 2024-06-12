'''
"A man, a plan, a canal: Panama"
 i                            j

 amanaplanacanalpanama
  i                j
 raceacar

 newstr = 'amanapaanaaaaa'

 - iterate through c in str
  - if c isa():
        - newstr".lower()

- return newtrs == new.reverse()[::-1]

race a car

'''

class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = '' #a

        for c in s: #A man, a plan, a canal: Panama
            if c.isalnum():
                newStr += c.lower()
        
        return newStr == newStr[::-1]