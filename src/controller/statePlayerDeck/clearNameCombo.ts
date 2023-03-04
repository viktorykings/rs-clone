import IPlayer from '../../interface/IPlayer';

function clearNameCombo(player: IPlayer): void {
  player.deck.map((el) => {
    // eslint-disable-next-line no-param-reassign
    el.nameCombo = String('');
    return null;
  });
}

export default clearNameCombo;
