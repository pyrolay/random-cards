import styles from './card.module.css'
import profile from '../../assets/CardThree/JJN_8_Cover.png'
import { GrTwitter, GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'

const Card3 = () => {
    return(
        <div className={styles.profile__card}>
            <img src={profile} alt="profile picture" className={styles.jotaro__img} />
            <p className={styles.profile__name}>JOTARO KUJO</p>
            <span className={styles.profile__user}>@starplatinum</span>
            <div className={styles.profile__social}>
                <GrTwitter /> <GrFacebookOption /> <GrLinkedinOption />
            </div>
        </div>
    )
}

export { Card3 }