import { useEffect, useRef } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api';
import styles from './login.module.scss'

type AuthResponse = {
    token: string,
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}
export function LoginBox() {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=1d07a027b739f8fa312f`;

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if(hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')

            console.log({ urlWithoutCode, githubCode })
        }
    })

    return (
       <div className={styles.loginBoxWrapper}>
           <strong>Entre e compartilhe sua mensagem</strong>
           <a href={signInUrl} className={styles.signInWithGithub}>
               <VscGithubInverted size='24' />
               Entrar com o Github
           </a>
       </div>
    )
}