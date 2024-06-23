# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
'''
if head.next = None:
    return false

3 -> 2 -> 0 -> 4 
'''

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head == None:
            return False
        
        slow = head
        fast = head

        while fast and fast.next != None:
            fast = fast.next.next
            slow = slow.next

            if fast == slow:
                return True
        