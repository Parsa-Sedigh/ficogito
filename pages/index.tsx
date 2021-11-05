import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import logo from '../public/images/Ficogito-LogoIcon.png';
import logoText from '../public/images/Ficogito-logotext.png';
import Image from 'next/image';
import Particles from "react-tsparticles";

const particlesOptions = {
    background: {
        color: {
            // value: "#0d47a1",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#000",
        },
        links: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
} as any;

const Home: NextPage = () => {

    return (
        <>
            <Particles options={particlesOptions} />
            <div className={styles.container}>

                <Image className={styles.logo} src={logo} alt="ficogito"/>
                <Image src={logoText} className={styles['text-logo']} alt="ficogito"/>
                {/*<img src="/images/Ficogito-LogoIcon.png" className={styles.logo}/>*/}
                {/*<img src="/images/Ficogito-LogoText.png" className={styles['text-logo']}/>*/}


            </div>
        </>
    )
};

export default Home
