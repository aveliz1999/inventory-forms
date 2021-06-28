import {FormEvent, useEffect, useState} from "react";
import styles from "./Login.module.css";
import axios, {AxiosError} from 'axios';
import useTextWidth from "../../hooks/useTextWidth";
import {Redirect} from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [domain, setDomain] = useState('');
    const domainWidth = useTextWidth({
        text: `@${domain}`,
        font: '4vh Arial'
    });

    async function getDomain() {
        const {data} = await axios.get('/api/users/domain');
        setDomain(data.domain);
    }

    useEffect(() => {
        getDomain()
    }, []);

    async function logIn(e: FormEvent) {
        e.preventDefault();
        setPassword('');
        try {
            await axios.post('/api/users/login', {
                username,
                password
            });
            setSuccess(true);
        }
        catch(err) {
            if(err.response.data.message) {
                setError(err.response.data.message)
            }
            else {
                console.error(err);
            }
        }
    }

    if(success) {
        // TODO redirect to correct screen
        return <Redirect to="/"/>
    }

    return <form className={styles.container} onSubmit={logIn}>
        {
            error && <div className={styles.error}>
                {
                    error
                }
            </div>
        }
        <div className={styles.emailWrapper}>
            <input className={styles.input} style={{
                paddingLeft: `${domainWidth + 14}px`
            }} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input tabIndex={-1} className={styles.emailDomain} value={`@${domain}`} style={{
                width: `${domainWidth + 14}px`
            }}/>
        </div>
        <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button type={"submit"} className={styles.loginButton}>Log In</button>
    </form>
}