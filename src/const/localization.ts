import { ILocalization } from '../interface/ILocalization';

const langs: ILocalization = {
  ru: {
    main: { start: 'Начать игру', settings: 'Настройки', about: 'О нас' },
    settings: { language: 'Изменить язык' },
    deskPage: {
      buttons: {
        neutButtons: ['Первой', 'Второй', 'Третьей', 'Последней', 'Случайно'],
        comboButtons: ['2x комбо!', '3x комбо!', '5x комбо!'],
        endMoveBtn: 'Завершить',
      },
      gameMsg: {
        makeMove: {
          move: 'походил картой',
          moveCombo: ['походил 2x комбо!', 'походил 3x комбо!', 'походил 5x комбо!'],
          rule: 'Картами котов можно ходить только после выбора режима Combo',
        },
        endMove: ['закончил ход.', 'нужно взять', 'карту/ы.'],
        combos: ['получает карту', 'У', 'нет карт и отдать ему нечего.', 'нет карты', 'выбрал игрока', 'думает кого выбрать.'],
        neut: ["обезвредил 'Взрывного котенка'!", "походил картой 'Обезвредить'."],
        explosion: 'взорвался!',
        favour: 'думает какую отдать карту.',
        attack: "походил картой 'Атака'!",
        mix: 'перемешал колоду.',
        no: "походил картой 'Нет'!",
        skip: ['Игроку', 'осталось взять одну карту.', 'передает ход.'],
        takeCard: ['взял 1 карту.', "вытянул 'Взрывного котенка'!", 'не нужно брать карты!', 'взял еще 1 карту.'],
      },
      modalTitles: {
        combo: 'Выберите карту!',
        favour: 'Выберите игрока, который отдаст Вам карту!',
        comboStart: ['Выберите игрока, у которого заберете карту!', 'Выберите игрока который отдаст Вам карту, если у него она есть!', 'Выберите любую карту из отбоя!'],
      },
    },
    endGameModal: { buttons: ['Новая игра', 'Главное меню', 'Вы победили!'] },
    startGame: 'Ваш ход!',
    gameSettings: {
      bot: 'Удалить',
      player: ['Изменить имя', 'Выбрать картинку'],
      level: ['Выбрать уровень сложности', 'Легкий'],
      buttons: ['Добавить котёнка', 'Начать игру', 'Отмена'],
      modal: {
        name: ['Изменить имя', 'Введите имя', 'Отмена'],
        avatar: ['Выбрать картинку', 'Назад', 'Далее', 'Готово', 'Отмена'],
        level: ['Легкий', 'Средний', 'Сложный', 'Выберите уровень'],
      },
      botNames: ['Адский кот', 'Толстяк', 'Пушистый донжуан', 'Чупакабра', 'Игривый дваждылюб', 'Рыжий убийца', 'Рыбовладелец', 'Мистер кот', 'Босс мяуфии'],
    },
  },
  en: {
    main: { start: 'Start game', settings: 'Settings', about: 'About' },
    settings: { language: 'Change language' },
    deskPage: {
      buttons: {
        neutButtons: ['First', 'Second', 'Third', 'Last', 'Random'],
        comboButtons: ['2x combo!', '3x combo!', '5x combo!'],
        endMoveBtn: 'Finish',
      },
      gameMsg: {
        makeMove: {
          move: 'moved the card',
          moveCombo: ['moved 2x combo!', 'moved 3x combo!', 'moved 5x combo!'],
          rule: 'Kitten\'s cards are allowed to use only in combo mode',
        },
        endMove: ['finished the move.', 'should take', 'card(s).'],
        combos: ['gets card', '', 'don\'t have any cards.', 'don\'t have card', 'chose player', 'is thinking which player to choose'],
        neut: ["neutralized 'Exploding kitten'!", "moved card 'Neutralize'."],
        explosion: 'have exlpoded!',
        favour: 'is thinking which card to give!',
        attack: "moved card 'Attack'!",
        mix: 'mixed the deck.',
        no: "moved card 'Not'!",
        skip: ['Player', 'haveone card to take.', 'passes the move.'],
        takeCard: ['took 1 card.', "took 'Exploding Kitten'!", 'shouldn\'t take cards!', 'took 1 more card'],
      },
      modalTitles: {
        combo: 'Choose a card!',
        favour: 'Choose a player who will give you a card!',
        comboStart: ['Choose player, whose card u\'ll take!', 'Choose player, who\'ll give you card, if they have it!', 'Choose any card from rebound!'],
      },
    },
    endGameModal: { buttons: ['New game', 'Main menu', 'You win!'] },
    startGame: 'Your turn!',
    gameSettings: {
      bot: 'Delete',
      player: ['Edit name', 'Choose avatar'],
      level: ['Choose game level', 'Easy'],
      buttons: ['Add kitten', 'Start game', 'Cancel'],
      modal: {
        name: ['Change Name', 'Enter your name', 'Cancel'],
        avatar: ['Choose avatar', 'Previous', 'Next', 'Done', 'Cancel'],
        level: ['Easy', 'Normal', 'Hard', 'Choose level'],
      },
      botNames: ['Diablo Gato', 'Puss in Boots', 'Fluffy don Huan', 'Chonk', 'The Furry Lover', 'Ginger Hit Man', 'Mr. Cat', 'Meow boss', 'Chupacabra'],
    },
  },
};

export default langs;
