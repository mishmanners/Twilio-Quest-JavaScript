function addFirstToLast(things) {
  let firstAndLast = '';

  if (things.length > 0 ) {
      firstAndLast = things[0] + things[things.length - 1]
  }
  return firstAndLast;
}
