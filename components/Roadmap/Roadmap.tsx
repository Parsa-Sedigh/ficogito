import styles from './Roadmap.module.scss';
import {RoadmapColumn} from "./RoadmapColumn/RoadmapColumn";

export const Roadmap = () => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
            </div>
            <div className={styles.row}>
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
            </div>
            <div className={styles.row}>
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
                <RoadmapColumn />
            </div>
        </div>
    );
};