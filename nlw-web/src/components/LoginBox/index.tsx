
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './login.module.scss'

export function LoginBox() {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user`;

    return (
       <div className={styles.loginBoxWrapper}>
           <strong>Entre e compartilhe sua mensagem</strong>
           <a href="#" className={styles.signInWithGithub}>
               <VscGithubInverted size='24' />
               Entrar com o Github
           </a>
       </div>
    )
}