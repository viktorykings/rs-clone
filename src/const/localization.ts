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
        makeMove: { move: 'походил картой', moveCombo: ['походил 2x комбо', 'походил 3x комбо', 'походил 5x комбо'] },
        endMove: ['закончил ход.', 'нужно взять', 'карту/ы.'],
        combos: ['получает карту', 'У', 'нет карт и отдать ему нечего.', 'нет карты'],
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
        makeMove: { move: 'moved the card', moveCombo: ['moved 2x combo', 'moved 3x combo', 'moved 5x combo'] },
        endMove: ['finished the move', 'should take', 'card(s)'],
        combos: ['gets card', '', 'don\'t have any cards.', 'don\'t have card'],
      },
    },
    endGameModal: { buttons: ['New game', 'Main menu'] },
  },
};

export default langs;
