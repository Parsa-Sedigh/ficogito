import styles from './Roadmap.module.scss';
import {StepColumn} from "./StepColumn/StepColumn";

export const Roadmap = () => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <StepColumn />
                <StepColumn />
                <StepColumn />
                <StepColumn />
            </div>
            <div className={styles.row}>
                <StepColumn />
                <StepColumn />
                <StepColumn />
                <StepColumn />
            </div>
            <div className={styles.row}>
                <StepColumn />
                <StepColumn />
                <StepColumn />
                <StepColumn />
            </div>
        </div>
    );
};