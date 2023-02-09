type TFunctionState =
'waitPlayerTurn' | 'waitTakeCardDeskDeck' | 'waitAnserTurn'
| 'waitEndMove' | 'waitCombo2' | 'waitCombo3' | 'waitCombo5'
| 'waitPlayerCombo2' | 'waitPlayerCombo3' | 'waitNeutralize' | 'endNeutralize'
| 'waitExplosion' | 'lose' | 'win' | '';

export default TFunctionState;
