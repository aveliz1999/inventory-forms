import styles from './YesNoQuestion.module.css';

export default function YesNoQuestion(args: {prompt: string, onSelect: (selected: 'yes' | 'no') => void}) {
    return <div className={styles.container}>
        <div className={styles.prompt}>
            {args.prompt}
        </div>
        <div className={styles.yes} onClick={() => args.onSelect('yes')}>
            Yes
        </div>
        <div className={styles.no} onClick={() => args.onSelect('no')}>
            No
        </div>
    </div>
}