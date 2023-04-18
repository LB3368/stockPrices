/**
 * Instructions
 * This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

best([15, 10, 20, 22, 1, 9])
12
Here are some more examples with positive profit:

best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100
If no profit is possible, return $0:

best([5, 4 , 3, 2, 1])
// 0

best([100])
// 0

best([100, 0])
// 0
 * 
 */

function best(prices) {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    const profit = price - minPrice

    if (profit > maxProfit) {
      maxProfit = profit
    }

    if (price < minPrice) {
      minPrice = price
    }
  }

  return maxProfit
}
/**
 * The function takes an array of prices as input and initializes two variables: minPrice to the first price in the array, and maxProfit to zero. It then iterates over the rest of the array, calculating the profit that could be made by buying at the minPrice and selling at the current price. If this profit is greater than the current maxProfit, the maxProfit variable is updated to the new value. Finally, if the current price is less than the minPrice, the minPrice variable is updated to the new value.

After iterating over the entire array, the function returns the maxProfit variable, which contains the maximum profit that could be made on the stock for that day.
 */
const prices = [10, 21, 5, 3, 11, 7]
const maxProfit = best(prices)
console.log(maxProfit)


