function choiceIndexArr<T>(arr: T[]): number {
  const len = arr.length;
  return Math.floor(Math.random() * len);
}

export default choiceIndexArr;
