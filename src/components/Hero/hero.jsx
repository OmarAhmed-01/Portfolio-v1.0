import React from 'react';
import { getImgUrl } from '../../utlis';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Omar</h1>
                <p className={styles.desc}>I am a recent engineering graduate with a passion for full-stack development. 
                    Eager to leverage my strong foundation in both front-end and back-end technologies to 
                    contribute to innovative and impactful projects.
                </p>
                <a href='mailto:Omar_Ahmed_M@outlook.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImgUrl("hero/Hero.png")} alt='hero image' className={styles.image}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};