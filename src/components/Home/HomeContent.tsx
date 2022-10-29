import styles from '@assets/styles/home/home.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

export const HomeContent = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  // this is the element we'll be targeting!
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsBox = skillsRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        // e is our target element -- the skillsBox;
        // other properties available include:
        //   boundingClientRect
        //   intersectionRatio
        //   intersectionRect
        //   rootBounds
        //   target
        //   time
        setIsSticky(e.isIntersecting);
      },
      { threshold: [0.1, 1], rootMargin: '0px 0px 0px 0px' }
    );

    if (skillsBox) {
      observer.observe(skillsBox);
    }

    // clean up the observer
    return () => {
      observer.unobserve(skillsBox!);
    };
  }, [skillsRef]);

  return (
    <section className={`${styles['content__wrapper']} ${styles['bg__dark']}`}>
      <div></div>
      <div className={styles['content']}>
        <div ref={skillsRef} className={styles.__1px}></div>
        <div id="content__excerpt" className={`${styles['content__excerpt']}`}>
          This is where all of my{' '}
          <span
            className={`${isSticky ? '' : styles['pin__active']} ${
              styles['content__pin_word']
            } ${styles['color__blue']}`}
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
