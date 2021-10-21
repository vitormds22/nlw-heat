import styles from './message.module.scss'
import logo from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logo} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero voluptates natus voluptate nemo at fugit, amet numquam ullam quo! Magnam corrupti doloribus eius, corporis amet facere at voluptate nobis.
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitormds22.png" alt="Vitor Machado" />
                        </div>
                        <span>
                            Vitor Machado
                        </span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero voluptates natus voluptate nemo at fugit, amet numquam ullam quo! Magnam corrupti doloribus eius, corporis amet facere at voluptate nobis.
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitormds22.png" alt="Vitor Machado" />
                        </div>
                        <span>
                            Vitor Machado
                        </span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero voluptates natus voluptate nemo at fugit, amet numquam ullam quo! Magnam corrupti doloribus eius, corporis amet facere at voluptate nobis.
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vitormds22.png" alt="Vitor Machado" />
                        </div>
                        <span>
                            Vitor Machado
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}