import styles from './card.module.css'
import cover from '../../assets/CardTwo/Weekly_Jump_Dec_12_1988.png'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const Card2 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.information}>
                <img src={cover} alt="cover" />
                <div className={styles.information__container}>
                    <h2 className={styles.card__title}>Battle Tendency</h2>
                    <div className={styles.card__tag}>
                        <span className={styles.card__year}>1987 - 1989 </span> <span className={styles.card__volume}>12 Volumes</span> <span className={styles.card__genre}>Action, Supernatural</span>
                    </div>
                    <p className={styles.card__description}>Joseph's journey involves mastering his innate Ripple abilities in order to combat hostile, ancient superbeings named the Pillar Men, creators of the Stone Mask, that plot to achieve their final evolutions.</p>
                    <div className={styles.card__button}>
                        <button className={styles.button__read__now}> 
                            <AiOutlinePlayCircle />
                            <span>Read now!</span>
                        </button>
                        <button className={styles.button__readlist}>
                            <IoMdAdd />
                            <span>Add to readlist!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card2 }