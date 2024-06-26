import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import hexagonalLogo from '../public/images/ficogito-logo-hexagonal.png';
import logoText from '../public/images/ficogito-logo-text.png';
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
    // text: ratio: 1920 589 logo: 256 291
    return (
        <>
            <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 translate-y-1/12 dotsSvg"
                 width="404"
                 height="684" viewBox="0 0 404 784">
                <defs>
                    <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
                             patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect>
            </svg>


            <div className={styles['page-container']}>
                <div className={styles.particles}>
                    <div className={styles['background--right']}/>
                    <Particles options={particlesOptions}/>
                    <div className={styles.container}>
                        <img src="images/ficogito-logo-hexagonal.png" className={`${styles.img} ${styles['img-hexa']}`}
                             alt="ficogito"/>
                        <img src="images/ficogito-logo-text.png" className={styles['img-text']} alt="ficogito"/>
                    </div>
                </div>
            </div>

            <div className={styles.announcement}>
                <span style={{fontSize: 20, marginRight: 10}}>🎉</span>
                Our website is undergoing renovations! Stay tuned for the big reveal on July 1st!
                Feel free to reach out via email if interested: &nbsp;
                <a className={styles.announcement__link} href="mailto:info@ficogito.com">info@ficogito.com</a>
            </div>
        </>

    )
};

export default Home;
