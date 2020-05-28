function scan(shippingItems)
{
  let contrabandCount = 0;
  let contrabandIndexes = [];
  // let shippingItems = process.argv[2];
  shippingItems.forEach(function(item)
  {
      if (item === "contraband")
      {
        contrabandIndexes.push(contrabandCount)
      }

      contrabandCount++;

  });
  return contrabandIndexes;
}
