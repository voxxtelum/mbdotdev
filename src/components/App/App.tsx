import React, { useContext } from 'react';
import { StylesContext } from '@context/Styles';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

export const App = () => {
  const { styles, utility } = useContext(StylesContext);
  return (
    <>
      <div className={styles.appHeader}>
        <Parallax className={styles.appMB} speed={-10}>
          <img alt="michael" src="/images/home/michaelbalson.webp" />
        </Parallax>
        <Parallax speed={-30}>
          <div className={styles['title__bars__grid']}>
            <div>
              <div
                className={`${styles['title__bar']} ${utility['bg__blue']} ${styles['bar__500']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__orange']} ${styles['bar__200']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__yellow']} ${styles['bar__300']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__purple']} ${styles['bar__500']}`}
              ></div>
            </div>
            <div>
              <div
                className={`${styles['title__bar']} ${utility['bg__opal']} ${styles['bar__500']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__purple']} ${styles['bar__400']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__blue']} ${styles['bar__400']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__yellow']} ${styles['bar__300']}`}
              ></div>
            </div>
            <div>
              <div
                className={`${styles['title__bar']} ${utility['bg__orange']} ${styles['bar__500']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__yellow']} ${styles['bar__400']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__opal']} ${styles['bar__300']}`}
              ></div>
              <div
                className={`${styles['title__bar']} ${utility['bg__blue']} ${styles['bar__200']}`}
              ></div>
            </div>
          </div>
        </Parallax>
        <div className={utility['__full_height']}></div>
      </div>
    </>
  );
};
