function scan(shippingItems)
{
  let contrabandCount = 0;
  var txt = "contraband";
  var x;
  foreach (x of shippingItems)
  {
      if (x === "contraband")
      {
        contrabandCount ++;
      }
  }
  return contrabandCount;
}
