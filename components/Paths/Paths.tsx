import Image from 'next/image';
import ficogito from '../../public/images/Ficogito-LogoIcon.png';
import styles from './Paths.module.css';

export const Paths = () => {

    return (
        <div className={styles.container}>
            <div style={{
                gridColumn: '1/-1',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoFlow: 'column',
                alignItems: 'end'
            }}>
                <div className={`${styles.path} ${styles['path--vertical-long']}`} style={{gridColumn: '1/2'}} />
                <div className={`${styles.path} ${styles['path--vertical-short']}`} style={{gridColumn: '3/-1', justifySelf: 'end'}} />
            </div>

            <div className={styles['main-image']}>
                <Image src={ficogito} alt="ficogito" width={150} height={150} />
            </div>


            <div style={{
                gridColumn: '1/-1',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoFlow: 'column',
                alignItems: 'start'
            }}>
                <div className={`${styles.path} ${styles['path--vertical-short']}`} style={{gridColumn: '1/2'}}/>
                <div className={`${styles.path} ${styles['path--vertical-long']}`} style={{gridColumn: '3/-1', justifySelf: 'end'}} />
            </div>

        </div>
    );
};
