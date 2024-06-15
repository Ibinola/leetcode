/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { //[7, 1, 5, 3, 6, 4] 
// [7, 1, 5, 3, 6, 4]
//     b  s
  let buy = 0
  let sell = 1
  let max_profit = 0 // 5

   while (sell < prices.length){ //     [7,6,4,3,1], 0
                                    //      b s 
        if (prices[buy] < prices[sell]){
            let profit = prices[sell] - prices[buy]
            max_profit = Math.max(profit, max_profit) // 2, 4
        } else {
            prices[buy] = prices[sell]
        }
        sell++
   }

   return max_profit
};
// max_profit = 4
//
// [7, 1, 5, 3, 6, 4]
//        s
//     b
//   s != 
// b prices[0] < prices[1]
//         profit =  s - b
//     max_profit = Max(profit, max_profit)
//   b = s
//   s++