import Image from 'next/image';
import logoHexagonal from '../../public/images/Ficogito-logo-hexagonal.png';
import styles from './Paths.module.scss';

export const Paths = () => {

    return (
        <div className={styles.container}>
            <div className={styles['top-row']}>
                <div className={`${styles.path} ${styles['path--vertical-long']} ${styles['line-1']}`} />
                <div className={`${styles.path} ${styles['path--vertical-short-2']} ${styles['line-2']}`}/>
                <div className={`${styles.path} ${styles['path--vertical-short-2']} ${styles['line-3']}`}/>
                <div className={`${styles.path} ${styles['path--vertical-short-2']} ${styles['line-4']}`} />

                <div className={styles['line-5']}>
                    <div className={`${styles.path} ${styles['path--vertical-short']} ${styles['line-6']}`}  />
                    <div className={`${styles.path} ${styles['line-7']}`} />
                    <div className={`${styles.path} ${styles['line-8']}`} />
                </div>

            </div>

            <div className={styles['main-image']}>
                <Image src={logoHexagonal} alt="ficogito" width={150} height={150} />
            </div>


            <div className={styles['bottom-row']}>
                <div className={`${styles.path} ${styles['line-10']}`}  />
                <div className={`${styles.path} ${styles['path--vertical-short']} ${styles['line-9']}`}/>
                <div className={`${styles.path} ${styles['line-11']}`} />
                <div className={`${styles.path} ${styles['line-12']}`} /> {/* TODO ?? See thi styles from the prod app */}
                <div className={`${styles.path} ${styles['line-13']}`} />
            </div>

        </div>
    );
};
