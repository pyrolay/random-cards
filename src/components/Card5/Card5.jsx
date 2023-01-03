import styles from './card.module.css'
import cover from '../../assets/CardFive/JumpComics63.png'
import { BiDownArrowAlt } from 'react-icons/bi'

const Card5 = () => {
    return(
        <div className={styles.container}>
            <img src={cover} alt="cover" className={styles.card__image} />
            <div className={styles.card__information}>
                <span className={styles.featured}>FEATURED</span>
                <h2>
                    <span>Passione</span>
                    <span>Vento Aureo</span>
                </h2>
                <hr />
                <p className={styles.card__description}>
                    Passione (パッショーネ Passhōne, lit. Passion in Italian) is an ItalianW MafiaW gang serving as the main antagonistic force of JoJo's Bizarre Adventure Part 5: Vento Aureo, controlled by Diavolo. Protagonist Giorno Giovanna infiltrated the gang in order to seize control of it. It is remarkable by the secretiveness of its members and the unusually high number of Stand Users among them. 
                </p>
                <BiDownArrowAlt className={styles.card__arrow} />
            </div>
        </div>
    )
}

export { Card5 }