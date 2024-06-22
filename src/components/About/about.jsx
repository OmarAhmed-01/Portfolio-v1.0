import React from 'react';
import { getImgUrl } from '../../utlis';
import styles from "./about.module.css"
export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImgUrl('about/about.png')} className={styles.aboutImage} alt='about me image'/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/frontend.png")} alt='cursor icon'/>
                        <div className={styles.aboutItemText}>
                            <p>
                                Front-end developer with experience in building responsive
                                and optimized websites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/serverIcon.png")} alt='server icon'/>
                        <div className={styles.aboutItemText}>
                            <p>
                                Back-end developer with experience in building fast
                                and optimized back-end system and APIs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/problemSolving.png")} alt='ui icon'/>
                        <div className={styles.aboutItemText}>
                            <p>
                                Possess great problem solving skills helping me in overcoming
                                challenges of many sorts.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};