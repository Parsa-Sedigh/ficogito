import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import logo from '../public/images/Ficogito-LogoIcon.png';
import logoText from '../public/images/Ficogito-LogoText.png';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
            <div className={styles.container}>

                <Image className={styles.logo} src={logo} alt="ficogito"/>
                <Image src={logoText} className={styles['text-logo']} alt="ficogito"/>
                {/*<img src="/images/Ficogito-LogoIcon.png" className={styles.logo}/>*/}
                {/*<img src="/images/Ficogito-LogoText.png" className={styles['text-logo']}/>*/}


            </div>
    )
};

export default Home
