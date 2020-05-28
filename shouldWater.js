const plantLifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

if ((plantLifeStatus === 0) && (drynessLevel > 10))
{
  console.log("WATER");
}
