function calculatePower(powerSettings)
{
  let totalPower = 0;

    numbers = [];

    powerSettings.forEach(function(number)
    {
      totalPower += number*2
    })

  return totalPower;

}
