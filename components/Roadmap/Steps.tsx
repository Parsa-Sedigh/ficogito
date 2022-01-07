import styles from './Steps.module.scss';
import {StepColumn} from "./StepColumn/StepColumn";
import {StepContent} from "./StepContent/StepContent";
import {StepBody} from "./StepBody/StepBody";
import {StepHeader} from "./StepHeader/StepHeader";

export const Steps = () => {

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

            <div className={`${styles.row} ${styles['row--tab-land']}`}>
                <StepColumn />
                <StepColumn />
                <StepColumn />
                <StepColumn />
            </div>
        </div>
    );
};

Steps.StepColumn = StepColumn;
Steps.StepContent = StepContent;
Steps.StepBody = StepBody;
Steps.StepHeader = StepHeader;

