import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import logo from '../public/images/FiCogito-logo.png';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} width={500} height={200} alt="ficogito"/>
    </div>
  )
}

export default Home
