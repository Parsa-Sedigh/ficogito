import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import logo from '../public/images/Ficogito-LogoIcon.png';
// import logoText from '../public/images/Ficogito-logotext.png';
import Image from 'next/image';
import Particles from "react-tsparticles";
import {Paths} from "../components/Paths/Paths";
import {Steps} from "../components/Roadmap/Steps";
import {Carousel} from "../components/Carousel/Carousel";

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
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: false,
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
                distance: 70,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#adadad",
        },
        links: {
            color: "#adadad",
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
            speed: .5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1000,
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
            <div className={styles.particles}>
                <Particles options={particlesOptions} />
                <div className={styles.container}>

                    <Image className={styles.logo} width={193.6} height={220} src={logo} alt="ficogito"/>
                    {/*<Image src={logoText} className={styles['text-logo']} width={440} height={98} alt="ficogito"/>*/}
                    {/*<img src="/images/Ficogito-LogoIcon.png" className={styles.logo}/>*/}
                    {/*<img src="/images/Ficogito-LogoText.png" className={styles['text-logo']}/>*/}
                </div>
            </div>

            <section>
                <Carousel />
            </section>

            <section>
                <Steps />
            </section>
        </>
    )
};

export default Home;
