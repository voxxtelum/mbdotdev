import styles from '@assets/styles/home/home.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export const HomeContent = () => {
  return (
    <section className={`${styles['content__wrapper']} ${styles['bg__dark']}`}>
      <div></div>
      <div className={styles['content']}>
        <div id="content__excerpt" className={`${styles['content__excerpt']}`}>
          This is where all of my{' '}
          <span
            className={`${styles['color__blue']} ${styles['content__pin_word']}`}
          >
            skills
          </span>{' '}
          would go. Look what else I can do.
          <div
            className={`${styles['__full_height']} ${styles['bg__blue']}`}
          ></div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
