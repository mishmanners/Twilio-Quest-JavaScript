function scan(shippingItems)
{
  let contrabandCount = 0;
  // let shippingItems = process.argv[2];
  shippingItems.forEach(function(item)
  {
      if (item === "contraband")
      {
        contrabandCount++;
      }
  });
  return contrabandCount;
}
