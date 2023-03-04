import {
  botWaitAnswer,
  botWaitTurn,
  playerWaitTurn,
  waitEndMove,
} from '../../../const/gameVariable';
import TFunctionState from '../../../interface/TFunctionState';

function getPause(isBot: boolean, functionState: TFunctionState): number {
  // pause for player
  let time = isBot ? botWaitTurn : playerWaitTurn;
  if (functionState === 'waitAnserTurn') time = isBot ? botWaitAnswer : playerWaitTurn;
  if (functionState === 'waitNeutralize') time = isBot ? waitEndMove : playerWaitTurn;
  if (functionState === 'waitPlayerLook') time = isBot ? waitEndMove : playerWaitTurn;
  return functionState === 'waitEndMove' ? waitEndMove : time;
}

export default getPause;
