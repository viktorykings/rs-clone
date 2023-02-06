function getPause(isBot: boolean, countTakeCard: number): number {
  // pause for player
  const time = isBot ? 10 : 12;
  return countTakeCard > 0 ? time : 5;
}

export default getPause;
