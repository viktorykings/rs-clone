import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/rules/1.jpg';
import img2 from '../../assets/rules/2.jpg';
import img4 from '../../assets/rules/4.jpg';
import img5 from '../../assets/rules/5.jpg';
import img6 from '../../assets/rules/6.jpg';
import img7 from '../../assets/rules/7.jpg';
import img8 from '../../assets/rules/8.jpg';
import img9 from '../../assets/rules/9.jpg';
import future from '../../assets/rules/future.jpg';
import skip from '../../assets/rules/skip.jpg';
import defuse from '../../assets/rules/defuse.jpg';
import iAttack from '../../assets/icons/icon-attack.png';
import iBomb from '../../assets/icons/icon-bomb.png';
import iDefuse from '../../assets/icons/icon-defuse.png';
import iFuture from '../../assets/icons/icon-future.png';
import iHurt from '../../assets/icons/icon-hurt.png';
import iNo from '../../assets/icons/icon-no.png';
import iShufle from '../../assets/icons/icon-shufle.png';
import iSkip from '../../assets/icons/icon-skip.png';
import iIcons from '../../assets/icons/icons.png';
import img10 from '../../assets/rules/img1.png';
import img12 from '../../assets/rules/12.png';
import img13 from '../../assets/rules/13.png';

export default function RulesPage(): JSX.Element {
  const rulesRU: JSX.Element = (
    <>
      <h1>Правила</h1>
      <Link to="/">
        <button className="btn" type="button">
          На главную
        </button>
      </Link>
      <article className="rules-content">
        <section className="column">
          <h2>
            <span>как играть</span>
          </h2>
          <p>
            У вас есть колода карт, содержащия несколько Взрывных Котят. Игра
            проходит так: Вы кладете колоду лицевой стороной вниз и поочередно
            тиянете карты, пока кто-то не вытащит Взрыного Котенка.
          </p>
          <img src={img1} alt="img1" />
          <p>Когда это произошло, этот игрок вылетел из игры.</p>
          <img src={img2} alt="img2" />
          <div className="short">
            <h4>Короче</h4>
            <h4>Если ты взорвался - ты проиграл</h4>
            <p className="error">Почувствуй всю горечь поражения</p>
            <h4>Если ты не взорвался - ты победил!</h4>
            <p className="error">Ощути всю сладость победы. Ты молодец!</p>
            <h4>А все остальные карты</h4>
            <p className="error">
              Просто уменшьшают шанс подорватьс на взрывных котятах.
            </p>
          </div>
          <div className="note">
            <h5 className="note-tittle">Например</h5>
            <p className="note-desc">
              <img src={future} width="200" alt="future" />
              Вы можете заглянуть в будущее, посмотрев три верхние карты в
              колоде.
              <img src={skip} width="200" alt="skip" />
              И, если Вы обраружили там Взрывного Котенка, то самое время
              Пропустить свой ход и избежать досадного поражения.
            </p>
          </div>
          <div className="note">
            <h5 className="note-tittle">Обезвредить</h5>
            <p className="note-desc">
              <img src={defuse} width="200" alt="defuse" />
              Единственная карта, которая может спасти от Взрывного Котенка.
              Сыграв карту Обезвредить после взрыва, вместо поражения, Вы
              продолжаете игру и возвращаете Взрывного Котенка в колоду в любое
              место в колоде. Карт Обезвредить много не бывает.
            </p>
          </div>
        </section>

        <section className="column">
          <h2>
            <span>как ходить</span>
          </h2>
          <ul>
            <ol>
              <p>
                Сыграйте карту из вышей руки, положив ее лицом ВВЕРХ в место
                сброса, после выполните действие карты. Или не играйте ни одной
                карты вовсе. Так тоже можно.
                <img src={img6} alt="img6" />
              </p>
              <div className="note">
                <h5 className="note-tittle">Карты без инструкций</h5>
                <p className="note-desc">
                  Некоторые карты не имеют действия сами по себе. Эти карты
                  должны быть сыграны в Паре или Комбо.
                </p>
                <img src={img4} alt="img4" />
                <p className="note-desc">
                  Если Вы сыграли Парные карты, то выберите другого игрока и
                  возьмите карту из его руки (наугад).
                </p>
                <img src={img5} alt="img5" />
              </div>
            </ol>
            <ol>
              <p>
                После того, как выполнили действие карты, Вы можете сыграть еще
                любое количество карти в течение хода.
                <img src={img7} alt="img7" />
              </p>
            </ol>
            <ol>
              <p>
                Наконец, Вы заканчиваете свой ход, вытянув карту из колоды в
                надежде, что это не Взрывной Кот, и берете ее себе в руку. (Это
                основное отличие от других настольных игр, Вы тянете карту В
                КОНЦЕ своего хода.)
              </p>
              <p>Игроки ходят по часовой стрелке.</p>
            </ol>
          </ul>
        </section>
      </article>
      <article className="guide">
        <section className="move-example column">
          <h2>
            <span>Пример хода</span>
          </h2>
          <div className="guide-row">
            <p>
              Вы решили сыграть карту заглянуть в будущее.
              <img src="/cards/ru/future1.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              Просматривая три верхние карты, Вы обранужили, что карта, которую
              Вам предостоит взять - это Взрывной Котенок.
              <img src="/cards/ru/bang1.png" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              Вы решаете атаковать Вашего соперника, тем самым закончить свой
              ход, а его принудить взять две карты.
              <img src="/cards/ru/attack2.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              Соперник оказался не прост. Он ипользует НЕТ карту, что отменяет
              Вашу атаку, так что это все еще Ваш ход.
              <img src="/cards/ru/no3.png" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              Тянуть Взрывного Котенка не хочется, поэтому Вы решаете сыграть
              карту ПЕРЕМЕШАТЬ, тем самым перемешиваете колоду случайным
              образом.
              <img src="/cards/ru/mix3.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <p>
              Из перемешанной колоды Вы тяните карту и надеетесь, что это не
              Взрывной Котенок. Удачи.
            </p>
          </div>

          <p>
            <span>-ИЛИ-</span>
            Вместо того, тчобы играть какие-либо карты из своей руки, Вы можете
            просто тянуть карту из колоды и закончить свой ход.
          </p>
        </section>
        <section className="type-cards column">
          <h2>
            <span>Типы карт</span>
          </h2>
          <ul>
            <li className="card">
              <div className="card-header">
                <img src={iDefuse} alt="defuse" />
                <p className="header-tittle">
                  Обезвредить
                  <span className="header-subtittle">6 карт</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Если Вы вытащили Взрывного Котенка, можете сыграть эту карту
                  вместо того, чтобы проиграть.
                </p>
                <p>
                  Затем положите Взрывного Котенка обратно в любое место в
                  колоде
                </p>
                <p>
                  Хотите испугать игрока после вас? Положите Котенка самой
                  верхней карой. Ваш ход заканчивается, сыграв карту Обезвредить
                  (Если Вы не должны ходить несколько раз конечно)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iNo} alt="No" />
                <p className="header-tittle">
                  Нет
                  <span className="header-subtittle">5 карт</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Останавливает любое действие кроме карты Обезвредить и
                  Взрывного Котенка. Представьте, что любая карта (или Пара или
                  Особое Комбо) под Нет больше не существует.
                </p>
                <img src={img8} width="80%" alt="img8" />
                <p>
                  Вы также можете сыграть Нет на другую Нет. Короче, Нет на Нет
                  - законно работает.
                </p>
                <img src={img9} width="80%" alt="img9" />
                <p>
                  И еще: карту Нет можно сыграть в любое время, доже если сейчас
                  не Ваш ход.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iBomb} alt="Bomb" />
                <p className="header-tittle">
                  Взрывные Котята
                  <span className="header-subtittle">4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Вы должны немедленно показать эту карту. Если у Вас нет карты
                  Обезвредить, Вы проиграли. Сбросьте все свои карты, включая
                  Взрывного Котенка, в колоду сброса.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iAttack} alt="Attack" />
                <p className="header-tittle">
                  Атаковать
                  <span className="header-subtittle">4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Заканчивает ваш ход без взятия карт и принуждает следующего
                  игрока сходить два раза подряд. Жертва карты Атаки ходит как
                  обычно (играет карты, после тянет). Если жертва карты Атаки
                  сыграет сама карту Атаки, ее ход так же сразу заканчивается
                  без взятия карт, а следующий игрок делает два хода подряд.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iSkip} alt="Skip" />
                <p className="header-tittle">
                  Пропустить
                  <span className="header-subtittle">4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Немедленно заканчивает ваш ход без взятия карт. (Если Вы
                  сыграли карту Пропустить как защиту на карту Атаковать, то это
                  отменяет только 1 из двух ходов. 2 карты отменят оба хода.)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iHurt} alt="hurt" />
                <p className="header-tittle">
                  Одолжение
                  <span className="header-subtittle">4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Принуждает любого другого игрока дать Вам одну карту из своей
                  руки. Какую именно дать выбирает он.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iShufle} alt="Shufle" />
                <p className="header-tittle">
                  ПЕРЕМЕШАТЬ
                  <span className="header-subtittle">4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Перемешайте колоду, не смотря, какие там карты. (Полезно если
                  знаете, что Взрывной Котенок на подходе.)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iFuture} alt="Future" />
                <p className="header-tittle">
                  Заглянуть в будещее
                  <span className="header-subtittle">5 карт</span>
                </p>
              </div>
              <div className="card-desc">
                <p>Подсмотрите верхние три карты в колоде.</p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iIcons} width="100%" alt="many icons" />
                <p className="header-tittle">
                  <span className="header-subtittle">по 4 карты</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Эти карты бесполезны сами по себе, но могут быть сыграны в
                  Паре или в Комбо
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
      <article className="combo">
        <section>
          <h2>
            <span>Особые комбо</span>
          </h2>
          <p>
            Вы можете сыграть любую карту как две или три, если их иконки в
            левом верхнем углу совпадают. Когда играете комбо, игнорируйте
            инструкции карты и следуйте этим:
          </p>
          <div className="wrap-card">
            <div className="card">
              <div className="card-header">
                <p className="header-tittle">Две одинаковые</p>
              </div>
              <div className="card-desc">
                <p>
                  Чтобы взять наугад карту у вашего соперника, сыграйте две
                  одинаковые карты в колоду сброса. Это работает с ЛЮБЫМИ
                  картами с одинаковыми иконками в углу.
                </p>
              </div>
              <div className="card-img">
                <img src={img10} width="60%" alt="many icons" />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <p className="header-tittle">Три одинаковые</p>
              </div>
              <div className="card-desc">
                <p>
                  Сыграв три одинаковые карты, Вы можете назвать карту, которую
                  хотите получить, и Выбранный игрок обязан вам ее дать. Если у
                  него такой нет, вы не получите ничего.
                </p>
              </div>
              <div className="card-img">
                <img src={img12} width="60%" alt="many icons" />
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <p className="header-tittle">Пять разных</p>
              </div>
              <div className="card-desc">
                <p>
                  Если Вы сыграли любые 5 разных карт с разными иконками, Вы
                  можете взять одну любую карту из колоды сброса. (Хватайте биту
                  быстрее, чтобы выбрать карту, пока никто не использовал карту
                  Нет).
                </p>
              </div>
              <div className="card-img">
                <img src={img13} width="60%" alt="many icons" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );

  const rulesEN: JSX.Element = (
    <>
      <h1>Rules</h1>
      <Link to="/">
        <button className="btn" type="button">
          To main
        </button>
      </Link>
      <article className="rules-content">
        <section className="column">
          <h2>
            <span>how to play</span>
          </h2>
          <p>
            In the deck of cards are some Exploding Kittens. You play the game
            by putting the deck face down and taking turns drawing cards until
            someone draws an Exploding Kitten.
          </p>
          <img src={img1} alt="img1" />
          <p>
            When that happens, that person explodes and they are out of the
            game.
          </p>
          <img src={img2} alt="img2" />
          <p>
            All other cards will give you powerful tools to help you avoid the
            explosion! This process continues until there is only 1 player left
            to win the game.
          </p>
          <div className="short">
            <h4>BASICALLY</h4>
            <h4>If you explode, you lose.</h4>
            <p className="error">
              and you are full of incendiary loser sadsauce.
            </p>
            <h4>If you don’t explode, YOU WIN.</h4>
            <p className="error">
              and you are full of greatness. good job, buddy.
            </p>
            <h4>and all of the other cards</h4>
            <p className="error">
              Will lessen your chances of getting exploded by Exploding Kittens.
            </p>
          </div>
          <div className="note">
            <h5 className="note-tittle">For example</h5>
            <p className="note-desc">
              <img src={future} width="200" alt="future" />
              If it was your turn to draw, you could play a See the Future Card
              to peek at the top few cards in the Draw Pile before drawing.
              <img src={skip} width="200" alt="skip" />
              If you saw an Exploding Kitten, you could then play a Skip Card to
              end your turn without drawing a card instead of exploding.
            </p>
          </div>
          <div className="note">
            <h5 className="note-tittle">defuse cards</h5>
            <p className="note-desc">
              <img src={defuse} width="200" alt="defuse" />
              The Defuse Card is the most powerful card in the game. These are
              the only cards that can save you from Exploding Kiittens. If you
              draw an Exploding Kitten, you can play a Defuse Card instead of
              dying. Then, reinsert the Exploding Kitten back into the Draw Pile
              anywhere you’d like in secret. Try to get as many Defuse Cards as
              you can.
            </p>
          </div>
        </section>

        <section className="column">
          <h2>
            <span>taking your turn</span>
          </h2>
          <ul>
            <ol>
              <p>
                Play a card from your hand, placing it face up on the discard
                pile, then perform the card`&apos;`s action. Or don`&apos;`t
                play any cards at all. So it is also possible.
                <img src={img6} alt="img6" />
              </p>
              <div className="note">
                <h5 className="note-tittle">CARDS WITHOUT INSTRUCTIONS</h5>
                <p className="note-desc">
                  Some cards have no effect on their own. These cards must be
                  played in a Pair or Combo.
                </p>
                <img src={img4} alt="img4" />
                <p className="note-desc">
                  If you played Paired Cards, choose another player and take a
                  card from his hand (at random).
                </p>
                <img src={img5} alt="img5" />
              </div>
            </ol>
            <ol>
              <p>
                After you have performed a card action, you may play any number
                of cards during your turn.
                <img src={img7} alt="img7" />
              </p>
            </ol>
            <ol>
              <p>
                Finally, you end your turn by drawing a card from the deck,
                hoping it`&apos;`s not an Explosive Cat, and putting it into
                your hand. (This is the main difference from other board games,
                you draw a card AT the END of your turn.)
              </p>
              <p>Игроки ходят по часовой стрелке.</p>
            </ol>
          </ul>
        </section>
      </article>
      <article className="guide">
        <section className="move-example column">
          <h2>
            <span>Example Turn</span>
          </h2>
          <div className="guide-row">
            <p>
              You decide to play a card to look into the future.
              <img src="/cards/en/future1.jpeg" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              Looking through the top three cards, you have discovered that the
              card you have to draw is the Explosive Kitten.
              <img src="/cards/en/bang1.jpeg" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              You decide to attack your opponent, thereby ending your turn, and
              forcing him to draw two cards.
              <img src="/cards/en/attack2.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              The opponent was not easy. He uses a NO card, which cancels your
              attack, so it`&apos;`s still your turn.
              <img src="/cards/en/no1.jpeg" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              You don`&apos;`t want to draw the Explosive Kitten, so you decide
              to play the SHUFFLE card, thereby shuffling the deck randomly.
              <img src="/cards/en/mix1.jpeg" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <p>
              From the shuffled deck, you draw a card and hope it`&apos;`s not
              an Explosive Kitten. Good luck.
            </p>
          </div>

          <p>
            <span>-OR-</span>
            Instead of playing any cards from your hand, you can simply draw a
            card from the deck and end your turn.
          </p>
        </section>
        <section className="type-cards column">
          <h2>
            <span>Card types</span>
          </h2>
          <ul>
            <li className="card">
              <div className="card-header">
                <img src={iDefuse} alt="defuse" />
                <p className="header-tittle">
                  DEfuse
                  <span className="header-subtittle">6 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  If you drew an Exploding Kitten, you can play this card
                  instead of dying. Place your Defuse Card in the Discard Pile.
                </p>
                <p>Then put the Explosive Kitten back anywhere in the deck</p>
                <p>
                  Want to scare the player after you? Put the Kitten on the
                  topmost square. Your turn ends by playing a harmless card
                  (Unless you have to play multiple times of course)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iNo} alt="No" />
                <p className="header-tittle">
                  No
                  <span className="header-subtittle">5 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Stops any action except for the Defuse card and Explosive
                  Kitten. Imagine that any card (or Pair or Special Combo) under
                  No no longer exists.
                </p>
                <img src={img8} width="80%" alt="img8" />
                <p>
                  You can also play No on another No. In short, No to No -
                  legally works.
                </p>
                <img src={img9} width="80%" alt="img9" />
                <p>
                  And one more thing: the No card can be played at any time,
                  even if it`&apos;`s not your turn.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iBomb} alt="Bomb" />
                <p className="header-tittle">
                  Exploding Kitten
                  <span className="header-subtittle">4 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  You must reveal this card immediately. If you don`&apos;`t
                  have a Defuse card, you lose. Discard all of your cards,
                  including the Explosive Kitten, to the discard pile.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iAttack} alt="Attack" />
                <p className="header-tittle">
                  attack
                  <span className="header-subtittle">4 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Ends your turn without drawing cards and forces the next
                  player to go two times in a row. Attack card victim moves as
                  usually (plays cards, then draws). If the victim of an Attack
                  card will play the Attack card itself, its turn also ends
                  immediately without drawing cards, and the next player takes
                  two turns in a row.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iSkip} alt="Skip" />
                <p className="header-tittle">
                  skip
                  <span className="header-subtittle">4 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Immediately ends your turn without drawing any cards. (If you
                  played the card Skip as a defense on the card Attack, then
                  this cancels only 1 of the two moves. 2 cards will cancel both
                  turns.)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iHurt} alt="hurt" />
                <p className="header-tittle">
                  favor
                  <span className="header-subtittle">4 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Forces any other player to give you one card from their hands.
                  Which one to give he chooses.
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iShufle} alt="Shufle" />
                <p className="header-tittle">
                  shuffle
                  <span className="header-subtittle">4 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  Shuffle the deck, no matter what cards there are. (useful if
                  know that Explosive Kitten is on the way.)
                </p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iFuture} alt="Future" />
                <p className="header-tittle">
                  see the future
                  <span className="header-subtittle">5 cards</span>
                </p>
              </div>
              <div className="card-desc">
                <p>Look at the top three cards in the deck.</p>
              </div>
            </li>
            <li className="card">
              <div className="card-header">
                <img src={iIcons} width="100%" alt="many icons" />
                <p className="header-tittle">
                  <span className="header-subtittle">4 of each</span>
                </p>
              </div>
              <div className="card-desc">
                <p>
                  These cards are powerless on their own, but if you collect any
                  2 matching cat cards, you can play them in pairs to steal a
                  random card from any player. They can also be used in special
                  combinations.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
      <article className="combo">
        <section>
          <h2>
            <span>special combos</span>
          </h2>
          <p>
            You can play any card as two or three, as long as their icons in the
            upper left corner match. When playing combos, ignore the
            card`&apos;`s instructions and follow these:
          </p>
          <div className="wrap-card">
            <div className="card">
              <div className="card-header">
                <p className="header-tittle">TWO of a kind</p>
              </div>
              <div className="card-desc">
                <p>
                  To randomly draw a card from your opponent, play two identical
                  cards to the discard pile. This works with ANY cards with the
                  same icons in the corner.
                </p>
              </div>
              <div className="card-img">
                <img src={img10} width="60%" alt="many icons" />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <p className="header-tittle">three of a kind</p>
              </div>
              <div className="card-desc">
                <p>
                  After playing three of the same cards, you can name the card
                  that want to receive, and the Selected Player is obliged to
                  give it to you. If there is no such thing, you will not get
                  anything.
                </p>
              </div>
              <div className="card-img">
                <img src={img12} width="60%" alt="many icons" />
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <p className="header-tittle">five different</p>
              </div>
              <div className="card-desc">
                <p>
                  If you have played any 5 different cards with different icons,
                  you You may draw any one card from the discard pile. (grab the
                  bat faster to select a card while no one has used the card
                  No).
                </p>
              </div>
              <div className="card-img">
                <img src={img13} width="60%" alt="many icons" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );

  console.log(rulesRU);

  return <div className="rules">{rulesEN}</div>;
}
