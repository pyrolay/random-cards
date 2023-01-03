import styles from './card.module.css'
import jolyneGif from '../../assets/CardSix/jolyneGif.gif'
import jolyneStatic from '../../assets/CardSix/jolyneStatic.jpg'

const Card6 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.gif__container}>
                <img src={jolyneStatic} alt="" className={styles.img__static} />
                <img src={jolyneGif} alt="" className={styles.img__active} />
            </div>
            <div className={styles.character__details}>
                <span className={styles.character__level}>LEVEL 6</span>
                <h3 className={styles.character__name}>Jolyne Cujoh</h3>
                <span className={styles.character__anime}>Stone Ocean</span>
                <p className={styles.character__desc}>Framed for a DUI murder, Jolyne is sent to Green Dolphin Street Prison, where she investigates and battles DIO's most trusted disciple, Father Enrico Pucci. Initially an ordinary girl, Jolyne quickly awakens her string-based Stand, Stone Free, during her time in jail.</p>
            </div>
            <div className={styles.character__power}>
                <div className={styles.character__power__card__one}>
                    <p className={styles.character__power__result}>String Decomposition</p>
                    <p className={styles.character__power__name}>ABILITY</p>
                </div>
                <div className={styles.character__power__card__two}>
                    <p className={styles.character__power__result}>Close-Range</p>
                    <p className={styles.character__power__name}>TYPE</p>
                </div>
            </div>
        </div>
    )
}

export { Card6 }