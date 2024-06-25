class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewels_set = set((jewels))

        total = 0

        for stone in stones:
            if stone in jewels_set:
                total += 1
        
        return total
        