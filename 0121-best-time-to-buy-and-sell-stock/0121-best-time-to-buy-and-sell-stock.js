/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    let maxProf = 0;
    let minVal = Infinity;
    
    for(let i = 0; i < prices.length; i++){
        minVal = Math.min(minVal, prices[i]);
        maxProf = Math.max(maxProf, prices[i] - minVal);
    }
    
    return maxProf;
};