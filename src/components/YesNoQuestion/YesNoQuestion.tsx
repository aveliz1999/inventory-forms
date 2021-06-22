import styles from './YesNoQuestion.module.css';

export default function YesNoQuestion(args: {prompt: string}) {
    return <div className={styles.container}>
        <div className={styles.prompt}>
            {args.prompt}
        </div>
        <div className={styles.yes}>
            Yes
        </div>
        <div className={styles.no}>
            No
        </div>
    </div>
}