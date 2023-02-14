function findPriorIndex<T>(arr: T[], ind: number): number {
  let ret = ind - 1;
  if (ret < 0) ret = arr.length - 1;
  return ret;
}

export default findPriorIndex;
