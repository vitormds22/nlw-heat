import styles from './message.module.scss'
import logo from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logo} alt="DoWhile 2021" />

            <ul className={styles.messageListWrapper}>

            </ul>
        </div>
    )
}