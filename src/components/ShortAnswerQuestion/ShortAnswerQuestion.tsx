import styles from './ShortAnswerQuestion.module.css';
import {useState} from "react";

export default function ShortAnswerQuestion(args: {prompt: string, onConfirm: (answer: string) => void}) {

    const [answer, setAnswer] = useState('');

    return <div className={styles.container}>
        <div className={styles.prompt}>
            {args.prompt}
        </div>
        <div></div>
        <div className={styles.inputContainer}>
            <input className={styles.input} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
        <div className={styles.confirmContainer}>
            <button className={styles.confirmButton} onClick={() => args.onConfirm(answer)}>Confirm</button>
        </div>
    </div>
}