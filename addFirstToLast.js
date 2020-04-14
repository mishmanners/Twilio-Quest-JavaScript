function addFirstToLast(allthethings) {
  let firstAndLast = '';

  if (allthethings.length > 0 ) {
      firstAndLast = allthethings[0] + allthethings[allthethings.length - 1]
  }
  return firstAndLast;
}
