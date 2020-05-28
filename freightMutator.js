function mutate(shippingItems)
{
  let mutatedItems = [];

  shippingItems.forEach(function(item)
  {
    mutatedItems.push(item.toUpperCase());
  })
  return mutatedItems;
}
