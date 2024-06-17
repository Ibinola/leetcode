# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # case 1
        if head is None:
            return None
        
        # case 2
        if head.next is None:
            return head
        
        '''

        '''
        pre = None
        curr = head

        while curr is not None:
            next_node = curr.next
            curr.next = pre

            pre = curr

            curr = next_node
        
        return pre

