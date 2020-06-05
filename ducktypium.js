class Ducktypium
{
  constructor(color) {
    this.color = color
    this.calibrationSequence = []

    // if statement example
    // if (["blue", "red", "yellow"].indexOf(color) >= 0)
    switch(color)
    {
      case "red":
        break;
      case "blue":
        break;
      case "yellow":
        break;
      default:
        throw new Error('ERRRRROOOOORRRRR! You cannot use that color');
    }
  }

  refract(color)
  {
    if (this.color === "red")
    {
      if (color === "blue") {
        return "purple";}
      else if (color === "yellow") {
        return "orange";}
    }

    if (this.color === "blue")
    {
      if (color === "red") {
        return "purple";}
      else if (color === "yellow") {
        return "green";}
    }

    if (this.color === "yellow")
    {
      if (color === "red") {
        return "orange";}
      else if (color === "blue") {
        return "green";}
    }

    if (this.color == color)
    {
      return color;
    }
  }
    //longer if statement
    // if this.color == "red" && color == "yellow"
    // {
    //   return "orange"
    // }

    // let obj = Ducktypium('red');
    //   obj.refract('blue');
    //   return('purple')

  calibrate(calibrationPower)
  {
      var numbers = [];

      calibrationPower.sort().forEach(function(number)
      {
            numbers.push(number*3);
      })

      this.calibrationSequence = numbers;

  }

}
