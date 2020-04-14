function addFirstToLast(allthethings) {
  let firstAndLast = '';

  if (allthethings.length > 0 ) {
      firstAndLast = allthethings[0] + allthethings[allthethings.length - 1]
  }
  return firstAndLast;
}
//console.log(addFirstToLast(['first', 'second', 'third']));
//console.log(addFirstToLast(['golden', 'terrier']));
//console.log(addFirstToLast(['cheerio']));
//console.log(addFirstToLast([]));
