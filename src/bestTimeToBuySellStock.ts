function bestTimeToBuySellStock(arr : number[]) : number {
  let buy = 0;
  let sell = 1;
  let maxP = 0;
  while(sell < arr.length) {
    let profit = arr[sell] - arr[buy];
    maxP = Math.max(maxP, profit);
    if(arr[sell] < arr[buy]) {
      buy = sell;   
    }
    sell++;
  }
  return maxP; 
}

export default bestTimeToBuySellStock;
