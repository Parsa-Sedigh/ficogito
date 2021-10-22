import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import logo from '../public/images/FiCogito-logo-hexagonal.jpg';
import logoText from '../public/images/FICogito-text.jpg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} width={140} height={140} alt="ficogito"/>
      <Image src={logoText} width={450} height={75} alt="ficogito"/>
    </div>
  )
};

export default Home
