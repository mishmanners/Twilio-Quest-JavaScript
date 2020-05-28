function scanAndFilter(shippingItems, forbiddenItems)
{
    let filteredItems = [];

    result = shippingItems.filter(word => word != forbiddenItems);

    // shippingItems.foreach(function(item)
    // {
    //   if (item != forbiddenItems)
    //     filteredItems.push(item);
    //
    // )}

    return result;
}
