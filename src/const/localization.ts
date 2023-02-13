import { ILocalization } from '../interface/ILocalization';

const langs: ILocalization = {
  ru: {
    main: { start: 'Начать игру', settings: 'Настройки', about: 'О нас' },
    settings: { language: 'Изменить язык' },
    deskPage: {
      buttons: ['Первой', 'Второй', 'Третьей', 'Последней', 'Случайно'],
      comboButtons: ['2x комбо!', '3x комбо!', '5x комбо!'],
      endMove: 'Конец хода',
      gameMsg: 'msg',
    },
    endGameModal: { buttons: ['Новая игра', 'Главное меню'] },
  },
  en: {
    main: { start: 'Start game', settings: 'Settings', about: 'About' },
    settings: { language: 'Change language' },
    deskPage: {
      buttons: ['First', 'Second', 'Third', 'Last', 'Random'],
      comboButtons: ['2x combo!', '3x combo!', '5x combo!'],
      endMove: 'End Move',
      gameMsg: 'msg',
    },
    endGameModal: { buttons: ['New game', 'Main menu'] },
  },
};

export default langs;
