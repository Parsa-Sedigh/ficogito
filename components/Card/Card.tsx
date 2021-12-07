import styles from './Card.module.scss';

export const Card = () => {

    return (
        <div className={styles.card}>
            <div className={`${styles.card__side} ${styles['card__side--front']}`}>
                Front
            </div>

            <div className={`${styles.card__side} ${styles['card__side--back']}`}>
                Back
            </div>
        </div>
    );
};
