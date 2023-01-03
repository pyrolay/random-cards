import styles from './card.module.css'
import background from '../../assets/CardOne/background.png'
import jonathan from '../../assets/CardOne/jonathan.png'
import dio from '../../assets/CardOne/dio.png'

const Card1 = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.card__title}>Phantom Blood</h2>
            <div className={styles.card}>
                <div className={styles.card__image_container}>
                    <img src={background} alt=""  className={styles.card__background}/>
                    <img src={dio} alt="" className={styles.card__dio} />
                    <img src={jonathan} alt=""  className={styles.card__jonathan} />
                </div>
            </div>
            <div className={styles.card__information}>
                <div className={styles.card__description}>
                    <p>
                        The story follows Jonathan Joestar as he matures with and eventually combats his adoptive brother, the cunning and merciless Dio Brando.
                    </p>
                    <p>
                        Dio eventually becomes a vampire, leading to Jonathan fighting him for humanity's sake.
                    </p>
                </div>
                <div className={styles.card__tags}>
                    <p>AUTOR <span>Hirohiko Araki</span></p>
                    <p>STUDIO <span>David Production</span></p>
                    <p>DURATION <span>100 minutes</span></p>
                </div>
                <button className={styles.card__button}>WATCH</button>
            </div>
        </div>
    )
}

export { Card1 }