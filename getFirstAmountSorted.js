function getFirstAmountSorted(inputArray, numberItems)

{
// let array = inputArray(process.argv[2]);
// let n = numberItems(process.argv[3]);

  sortedArray = inputArray.sort();

  newArray = sortedArray.slice(0, numberItems);

  return newArray;

  // const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
  // console.log(newArray); // << should print out ['apple', 'bat']
}
