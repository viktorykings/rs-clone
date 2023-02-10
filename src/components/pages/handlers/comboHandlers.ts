import combo5GiveCard from '../../../controller/game-event/subevent/combo5GiveCard';
import IGame from '../../../interface/IGame';
import IPlayer from '../../../interface/IPlayer';
import modalChoicePlayer from '../../../controller/game-event/modalChoicePlayer';
import modalChoiseCard from '../../../controller/game-event/modalChoiceCard';
// import combo2ChoisePlayer from '../../../controller/game-event/subevent/combo2ChoisePlayer';

export const clearNameCombo = (player: IPlayer): void => {
  player.deck.map((el) => {
    // eslint-disable-next-line no-param-reassign
    el.nameCombo = String('');
    return null;
  });
};
export const checkModalVisible = (game: IGame) => game.gameState.modalVisible;
export const checkFunctionStateCombo5 = (game: IGame) => {
  const state = game.gameState.functionState;
  return state === 'waitCombo5';
};
export const handleChoosePlayer = (
  myGame: IGame,
  playerName: string,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  // eslint-disable-next-line no-param-reassign
  myGame = modalChoicePlayer(myGame, playerName);
  setter(myGame);
  console.log(myGame);
};
export const handleChooseCard = (
  myGame: IGame,
  cardId: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  // eslint-disable-next-line no-param-reassign
  myGame = modalChoiseCard(myGame, cardId);
  setter(myGame);
  console.log(myGame);
};
export const handleCombo5 = (
  myGame: IGame,
  index: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
  setterPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>,
) => {
  combo5GiveCard(myGame, index);
  setter(myGame);
  setterPlayers([...myGame.players]);
};

export const clickDoubleCombo = (player: IPlayer): IPlayer => {
  clearNameCombo(player);
  player.combos.doubleCats.map((cr, ind) => cr.map((el) => {
    // eslint-disable-next-line no-param-reassign
    el.nameCombo = String(ind); return null;
  }));
  console.log(player);
  return player;
};

export const clickTripleCombo = (player: IPlayer): IPlayer => {
  clearNameCombo(player);
  player.combos.tripleCats.map((cr, ind) => cr.map((el) => {
    // eslint-disable-next-line no-param-reassign
    el.nameCombo = String(ind + 1);
    return null;
  }));
  console.log(player);
  return player;
};

export const clickFiveCombo = (player: IPlayer): IPlayer => {
  clearNameCombo(player);
  player.combos.fiveCats.map((cr, ind) => cr.map((el) => {
    // eslint-disable-next-line no-param-reassign
    el.nameCombo = String(ind + 1);
    return null;
  }));
  console.log(player);
  return player;
};

export const usedDoubleCombo = (
  game: IGame,
  setter: React.Dispatch<React.SetStateAction<IPlayer[]>>,
) => {
  const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
  if (pl !== undefined) {
    clickDoubleCombo(pl);
    // eslint-disable-next-line no-param-reassign
    game.gameState.stateGame = 'doubleCombo';
    console.log('---combo---');
    console.log(game);
    setter((p) => ([...p]));
  }
};

export const usedTripleCombo = (
  game: IGame,
  setter: React.Dispatch<React.SetStateAction<IPlayer[]>>,
) => {
  const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
  if (pl !== undefined) {
    clickTripleCombo(pl);
    // eslint-disable-next-line no-param-reassign
    game.gameState.stateGame = 'tripleCombo';
    console.log('---combo---');
    console.log(game);
    setter((p) => ([...p]));
  }
};

export const usedFiveCombo = (
  game: IGame,
  setter: React.Dispatch<React.SetStateAction<IPlayer[]>>,
) => {
  const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
  if (pl !== undefined) {
    clickFiveCombo(pl);
    // eslint-disable-next-line no-param-reassign
    game.gameState.stateGame = 'fiveCombo';
    console.log('---combo---');
    console.log(game);
    setter((p) => ([...p]));
  }
};
