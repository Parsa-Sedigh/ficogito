import styles from "../Steps.module.scss";



export const StepColumn = () => {

    return (
        <div className={styles.column}>
            <div className={styles.step}>
                <div className={styles.step__content}>
                    <div className={styles.step__header}>
                        <span className={styles.step__time}>2022 Q1</span>
                        <span className={styles['step__header-text']}>Concept</span>
                    </div>

                    {/*<div className={styles['step__list-container']}>*/}
                        <ul className={styles.step__list}>
                            <li>Concept Generation</li>
                            <li>Concept Generation</li>
                        </ul>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
