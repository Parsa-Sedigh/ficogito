import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import hexagonalLogo from '../public/images/ficogito-logo-hexagonal.png';
import logoText from '../public/images/ficogito-logo-text.png';
import Image from 'next/image';
import Particles from "react-tsparticles";
import {Paths} from "../components/Paths/Paths";
import {Steps} from "../components/Roadmap/Steps";

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
        <div className={styles['page-container']}>
            <div className={styles.particles}>
                <div className={styles['background--right']} />
                <Particles options={particlesOptions}   />
                <div className={styles.container}>
                    <div className={styles.hexagonal__logo}>
                        <Image src={hexagonalLogo}
                               className={styles.hexagonal__image}
                               // layout="fill"
                               // objectFit="contain"
                            width={192}
                            height={220}
                               alt="ficogito"/>
                    </div>

                    <div className={styles.text__logo}>
                        <Image src={logoText}
                               className={styles['text-logo']}
                               // layout="fill"
                               // objectFit="contain"
                               width={550}
                               height={180}
                               alt="ficogito"/>
                    </div>

                </div>
            </div>

            <div className={styles['dots-container']}>
                <svg className={`${styles['dots']}`}
                     width="300" height="684" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
                                 patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect>
                </svg>
            </div>


            {/*<div className={styles['paths']}>*/}
            {/*    <div className={styles['background--left']} />*/}

            {/*    <Paths />*/}
            {/*    <svg className={`${styles['dots']}`}*/}
            {/*         width="300" height="684" viewBox="0 0 404 784">*/}
            {/*        <defs>*/}
            {/*            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"*/}
            {/*                     patternUnits="userSpaceOnUse">*/}
            {/*                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>*/}
            {/*            </pattern>*/}
            {/*        </defs>*/}
            {/*        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect>*/}
            {/*    </svg>*/}

            {/*</div>*/}

            {/*<Steps />*/}
        </div>
    )
};

export default Home;
