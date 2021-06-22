import styles from './ShortAnswerQuestion.module.css';
import {useState} from "react";
import Scanner from "../Scanner/Scanner";

export default function ShortAnswerQuestion(args: {prompt: string, onConfirm: (answer: string) => void}) {

    const [answer, setAnswer] = useState('');
    const [scanning, setScanning] = useState(false);
    const [noDevicesFound, setNoDevicesFound] = useState(false);

    return scanning ?
        <Scanner onScan={(answer) => {
            if(scanning) {
                setScanning(false);
                setAnswer(answer);
            }
        }} onNoDevicesFound={() => setNoDevicesFound(true)}/> :
        <div className={styles.container}>
            <div className={styles.prompt}>
                {args.prompt}
            </div>
            <div></div>
            <div className={styles.inputContainer}>
                <input className={styles.input} value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                {
                    !noDevicesFound && <button className={styles.scanButton} onClick={() => setScanning(true)}>🔍</button>
                }
            </div>
            <div className={styles.confirmContainer}>
                <button className={styles.confirmButton} onClick={() => args.onConfirm(answer)}>Confirm</button>
            </div>
        </div>
}