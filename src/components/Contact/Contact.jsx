import React from 'react';
import styles from './contact.module.css';
import { getImgUrl } from '../../utlis';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImgUrl("contact/emailIcon.png")} alt='email icon'/>
                <a href='mailto:Omar_Ahmed_M@outlook.com'>Omar_Ahmed_M@outlook.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImgUrl("contact/linkedinIcon.png")} alt='LinkedIn icon'/>
                <a href='https://www.linkedin.com/in/omar-ahmed-690b69284/'>LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImgUrl("contact/githubIcon.png")} alt='Github icon'/>
                <a href='https://github.com/OmarAhmed-01'>Github</a>
            </li>
        </ul>
    </footer>
  );
};

