import { useState } from 'react'
import { BsDice1, BsDice2Fill, BsFillDice3Fill, BsDice4Fill, BsFillDice5Fill, BsDice6 } from 'react-icons/bs'
import { CardContainer } from '../CardContainer'
import styles from './app.module.css'

function App() {

  const [diceResult, setDiceResult] = useState(1)

  const handleRollDice = () => {
    let number = parseInt(Math.random() * 6 + 1)
    setDiceResult(number)
  }

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.dice__container}>
          <BsFillDice3Fill className={styles.dice__bump__up} />
          <BsDice4Fill className={styles.dice__bump__down} />
          <BsDice1 className={styles.dice__bump__up} />
        </div>
        <div className={styles.title}>
          <h1>Roll the dice, get a random card!</h1>
        </div>
        <div className={styles.dice__container}>
          <BsDice6 className={styles.dice__bump__up} />
          <BsDice2Fill className={styles.dice__bump__down} />
          <BsFillDice5Fill className={styles.dice__bump__up} />
        </div>
      </div>
      <button className={styles.roll__button} onClick={() => handleRollDice()}>
        <BsDice6 className={styles.button__dice} /> Roll!
      </button>
      <div className={styles.card__result__container}>
        <h2 className={styles.card__result__title}>Result is... {diceResult}</h2>
        <div className={styles.card__container}>
          <CardContainer card={diceResult} />
        </div>
      </div>
    </>
  )
}

export default App
