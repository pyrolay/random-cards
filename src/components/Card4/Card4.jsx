import styles from './card.module.css'
import { GiCutDiamond } from 'react-icons/gi'
import { TbPlayerSkipBack, TbPlayerPause, TbPlayerSkipForward } from 'react-icons/tb'

const Card4 = () => {
    return(
        <div className={styles.card}>
            <div className={styles.music__container}>
                <div className={styles.music__content}>
                    <h2 className={styles.name}>Josuke Higashikata</h2>
                    <h3 className={styles.title}>
                        <GiCutDiamond />
                        DIAMOND IS UNBREAKABLE
                    </h3>
                    <p className={styles.song}>'Crazy D.'</p>
                    <div className={styles.music__controls}>
                        <TbPlayerSkipBack className={styles.music__button} />
                        <TbPlayerPause className={styles.music__button} />
                        <TbPlayerSkipForward className={styles.music__button} />
                    </div>
                </div>
            </div>
            <div className={styles.album}>
                <div className={styles.album__cover}></div>
                <div className={styles.album__vinyl}></div>
            </div>
        </div>
    )
}

export { Card4 }