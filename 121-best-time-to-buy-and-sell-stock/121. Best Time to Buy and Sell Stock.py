'''
[]
[1,2,4,2,5,7,2,4,9,0,9]
 i 
                   j
'''

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0 # 3

        buy = 0

        for sell in range(1, len(prices)):
            if prices[sell] > prices[buy]:
                profit = prices[sell] - prices[buy]
                max_profit = max(profit, max_profit)
            else:
                buy = sell
        
        return max_profit
        