const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);
{
  if (treeLifeStatus === 0) {
    console.log('alive')
  }
  else {
    console.log('other')
  }
}
