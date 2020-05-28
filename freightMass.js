function calculateMass(shippingItems)
{
  let totalMass = 0;
  // let item = shippingItems.split()

  shippingItems.forEach(function(item)
  //for item in shippingItems
  {
    totalMass += item.length
  })
  return totalMass;
}
