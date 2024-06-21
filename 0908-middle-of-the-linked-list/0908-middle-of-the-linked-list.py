# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
'''
slow, fast = self.head
while fast and fast.next.next is not None
    fast = fast.next.next  #
    slow = slow.next
slow.next
'''
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head

        while fast.next and fast.next.next != None:
            fast = fast.next.next
            slow = slow.next
        
        if fast.next != None and fast.next.next == None:
            slow = slow.next
            fast = fast.next
        
        # while slow.next != None:
        #     output.append(slow.val)
        #     slow = slow.next
        # output.append(fast.val)
        
        return slow