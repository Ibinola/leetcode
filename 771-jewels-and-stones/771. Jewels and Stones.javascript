/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewel_set = new Set(jewels)
    let total = 0
    console.log(jewel_set) 
    for (let stone of stones){
       if (jewel_set.has(stone)){
          total++
       }
    }

    return total
};