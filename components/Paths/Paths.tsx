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

                <div style={{
                    gridColumn: '2/-1',
                    position: 'relative',
                    height: '100%'
                }}>
                    <div className={`${styles.path} ${styles['path--vertical-short']}`} style={{
                        gridColumn: '3/-1',
                        position: 'absolute',
                        height: '100%',
                        right: '0'
                    }} />
                    <div className={`${styles.path}`} style={{
                        position: 'absolute',
                        bottom: '-31.9%',
                        right: '26%',
                        transform: 'rotate(90deg)',
                        height: '65%'
                    }} />
                    <div className={`${styles.path}`} style={{
                        position: 'absolute',
                        bottom: '-19%',
                        right: '51.5%',
                        height: '20%'
                    }} />
                </div>

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
