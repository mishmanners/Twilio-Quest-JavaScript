class TargetingSolution
{
  constructor(config)
  {
    this.config = config;
    this.x = config.x;
    this.y = config.y;
    this.z = config.z;
  }

  target()
  {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}
