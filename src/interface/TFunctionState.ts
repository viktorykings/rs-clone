type TFunctionState =
'waitPlayerTurn' | 'waitTakeCardDeskDeck' | 'waitAnserTurn'
| 'waitEndMove' | 'waitCombo2' | 'waitCombo3' | 'waitCombo5'
| 'waitPlayerCombo2' | 'waitPlayerCombo3' | 'waitNeutralize' | 'endNeutralize'
| 'waitExplosion' | 'lose' | 'win' | 'waitEndNot' | 'waitPlayerLook'
| 'waitFavorPlayer' | 'waitFavorPlayerCard' | 'waitNotToNot' | 'waitEndNotToNot' | '';

export default TFunctionState;
