function maxProfit(prices: number[]): number {
  let minPrices: number = prices[0];
  let maxPrices: number = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrices = Math.min(minPrices, prices[i]);
    maxPrices = Math.max(maxPrices, prices[i] - minPrices);
  }
  return maxPrices;
}
