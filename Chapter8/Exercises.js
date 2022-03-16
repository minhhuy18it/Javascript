//Retry
function primitiveMultiply(numa, numb) {
  if (Math.random() < 0.2) {
    return numa * numb;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
function reliableMultiply(numa, numb) {
  try {
    return primitiveMultiply(numa, numb);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(numa, numb);
    } else {
      throw e;
    }
  }
}
console.log(reliableMultiply(8, 8));