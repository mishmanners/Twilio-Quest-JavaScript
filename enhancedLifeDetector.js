const treeLife = Number(process.argv[2]);

if (treeLife === 0)
{
  status = "alive"
}

else if (treeLife === 1)
{
  status = "flowering"
}

else if (treeLife === 2)
{
  status = "shedding"
}

else if (treeLife > 2)
{
  status = "other"
}

console.log(status)
