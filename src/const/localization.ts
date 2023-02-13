import { ILocalization } from '../interface/ILocalization';

const langs: ILocalization = {
  ru: {
    main: { start: 'Начать игру', settings: 'Настройки', about: 'О нас' },
    settings: { language: 'Изменить язык' },
    deskPage: {
      buttons: {
        neutButtons: ['Первой', 'Второй', 'Третьей', 'Последней', 'Случайно'],
        comboButtons: ['2x комбо!', '3x комбо!', '5x комбо!'],
        endMoveBtn: 'Конец хода',
      },
      gameMsg: {
        makeMove: { move: 'походил картой', moveCombo: ['походил 2x комбо!', 'походил 3x комбо!', 'походил 5x комбо!'] },
        endMove: ['закончил ход.', 'нужно взять', 'карту/ы.'],
        combos: ['получает карту', 'У', 'нет карт и отдать ему нечего.', 'нет карты'],
        neut: ["обезвредил 'Взрывного котенка'!", "походил картой 'Обезвредить'."],
        explosion: 'взорвался!',
        favour: 'думает какую отдать карту.',
        attack: "походил картой 'Атака'!",
        mix: 'перемешал колоду.',
        no: "походил картой 'Нет'!",
        skip: ['Игроку', 'осталось взять одну карту.', 'передает ход.'],
        takeCard: ['взял 1 карту.', "вытянул 'Взрывного котенка'!", 'не нужно брать карты!'],
      },
      modalTitles: {
        combo: 'Выберите карту!',
        favour: 'Выберите игрока, который отдаст Вам карту!',
      },
    },
    endGameModal: { buttons: ['Новая игра', 'Главное меню'] },
  },
  en: {
    main: { start: 'Start game', settings: 'Settings', about: 'About' },
    settings: { language: 'Change language' },
    deskPage: {
      buttons: {
        neutButtons: ['First', 'Second', 'Third', 'Last', 'Random'],
        comboButtons: ['2x combo!', '3x combo!', '5x combo!'],
        endMoveBtn: 'End Move',
      },
      gameMsg: {
        makeMove: { move: 'moved the card', moveCombo: ['moved 2x combo!', 'moved 3x combo!', 'moved 5x combo!'] },
        endMove: ['finished the move.', 'should take', 'card(s).'],
        combos: ['gets card', '', 'don\'t have any cards.', 'don\'t have card'],
        neut: ["neutralized 'Exploding kitten'!", "moved card 'Neutralize'."],
        explosion: 'have exlpoded!',
        favour: 'is thinking which card to give!',
        attack: "moved card 'Attack'!",
        mix: 'mixed the deck.',
        no: "moved card 'Not'!",
        skip: ['Player', 'haveone card to take.', 'passes the move.'],
        takeCard: ['took 1 card.', "took 'Exploding Kitten'!", 'shouldn\'t take cards!'],
      },
      modalTitles: {
        combo: 'Choose a card!',
        favour: 'Choose a player who will give you a card!',
      },
    },
    endGameModal: { buttons: ['New game', 'Main menu'] },
  },
};

export default langs;
