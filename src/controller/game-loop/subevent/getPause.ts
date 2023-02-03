import TFunctionState from '../../../interface/TFunctionState';

function getPause(functionState: TFunctionState, countTakeCard: number): number {
  // pause for player
  let time = 11;
  if (functionState === 'waitBotTurn') time = 10;
  return countTakeCard > 0 ? time : 5;
}

export default getPause;
