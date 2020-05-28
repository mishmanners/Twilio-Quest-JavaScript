const firstValue = process.argv[2];
const secondValue = process.argv[3];

if (firstValue.toLowerCase() < secondValue.toLowerCase())
  {console.log(-1);}

else if (firstValue.toLowerCase() > secondValue.toLowerCase())
  {console.log(1);}

else if (firstValue.toLowerCase() == secondValue.toLowerCase())
  {console.log(0);}

// else {
//  console.log(0);
// }

// var firstValue = process.argv[2].toLowerCase()
// var secondValue = process.argv[3].toLowerCase()
//
// let ans = 0;
//
// if(firstValue > secondValue) {
//     ans = -1
//     console.log(ans.toString())
// } else if(firstValue === secondValue) {
//     ans = 0
//     console.log(ans.toString())
// } else if(firstValue < secondValue) {
//     ans = 1
//     console.log(ans.toString())
// }
