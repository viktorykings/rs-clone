import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/rules/1.jpg';
import img2 from '../../assets/rules/2.jpg';
import img4 from '../../assets/rules/4.jpg';
import img5 from '../../assets/rules/5.jpg';
import img6 from '../../assets/rules/6.jpg';
import img7 from '../../assets/rules/7.jpg';
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

export default function RulesPage(): JSX.Element {
  return (
    <div className="rules">
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
            У ва есть колода карт, содержащия несколько Взрывных Котят. Игра
            проходит так: Вы кладете колоду лицевой стороной вниз и поочередно
            тиянете карты, пока кто-то не вытащит Взрыного Котенка.
          </p>
          <img src={img1} alt="img1" />
          <p>Когда это произошло, этот игрок вылетел из игры.</p>
          <img src={img2} alt="img2" />
          <div className="short">
            <h2>Короче</h2>
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
              <img src="/cards/future1.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              Просматривая три верхние карты, Вы обранужили, что карта, которую
              Вам предостоит взять - это Взрывной Котенок.
              <img src="/cards/future1.png" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              Вы решаете атаковать Вашего соперника, тем самым закончить свой
              ход, а его принудить взять две карты.
              <img src="/cards/future1.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <div className="arrow-left-down" />
            <p>
              Соперник оказался не прост. Он ипользует НЕТ карту, что отменяет
              Вашу атаку, так что это все еще Ваш ход.
              <img src="/cards/future1.png" alt="future1" />
            </p>
          </div>

          <div className="guide-row">
            <p>
              Тянуть Взрывного Котенка не хочется, поэтому Вы решаете сыграть
              карту ПЕРЕМЕШАТЬ, тем самым перемешиваете колоду случайным
              образом.
              <img src="/cards/future1.png" alt="future1" />
            </p>
            <div className="arrow-right-down" />
          </div>

          <div className="guide-row">
            <p>
              Из перемешанной колоды Вы тяните карту и надеетесь, что это не
              Взрывной Котенок. Удачи.
              <img src="/cards/future1.png" alt="future1" />
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
                <img src="" alt="" />
                <p>
                  Вы также можете сыграть Нет на другую Нет. Короче, Нет на Нет
                  - законно работает.
                </p>
                <img src="" alt="" />
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
      <section className="combo column">
        <h2>
          <span>Особые комбо</span>
        </h2>
        <p>
          Вы можете сыграть любую карту как две или три, если их иконки в левом
          верхнем углу совпадают. Когда играете комбо, игнорируйте инструкции
          карты и следуйте этим:
        </p>
        <p>Две одинаковые</p>
        <p>
          Чтобы взять наугад карту у вашего соперника, сыграйте две одинаковые
          карты в колоду сброса. Это работает с ЛЮБЫМИ картами с одинаковыми
          иконками в углу.
        </p>
        <p>Три одинаковые</p>
        <p>
          Сыграв три одинаковые карты, Вы можете назвать карту, которую хотите
          получить, и Выбранный игрок обязан вам ее дать. Если у него такой нет,
          вы не получите ничего.
        </p>
        <p>Пять разных</p>
        <p>
          Если Вы сыграли любые 5 разных карт с разными иконками, Вы можете
          взять одну любую карту из колоды сброса. (Хватайте биту быстрее, чтобы
          выбрать карту, пока никто не использовал карту Нет).
        </p>
      </section>
    </div>
  );
}
