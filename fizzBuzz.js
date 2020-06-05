const donut = Number(process.argv[2])

if ((donut % 3 === 0) && (donut % 5 === 0))
{
  console.log('JavaScript')
}

else if (donut % 3 === 0)
{
  console.log('Java')
}

else if (donut % 5 === 0)
{
  console.log('Script')
}

else
{
  console.log(donut)
}
