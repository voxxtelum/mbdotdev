import styles from '@assets/styles/home/home.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

type HomeContentProps = {
  bgColor?: string;
  accentColor?: string;
  textColor?: string;
  Content: React.ComponentType<HomeSkillsProps>;
};
type HomeSkillsProps = {
  contentColor: string;
  contentBG: string;
  textColor: string;
  isSticky: boolean;
};

export const HomeContent = ({
  bgColor,
  accentColor,
  textColor,
  Content,
}: HomeContentProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  // this is the element we'll be targeting!
  const skillsRef = useRef<HTMLDivElement>(null);

  let backgroundColor = bgColor ? `bg__${bgColor}` : `bg__dark`;

  let contentColor = accentColor ? `color__${accentColor}` : `color__blue`;
  let contentBG = accentColor ? `bg__${accentColor}` : `bg__blue`;

  let color = textColor ? '' : `color_light`;

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
    <section
      className={`${styles['content__wrapper']} ${styles[backgroundColor]}`}
    >
      <div></div>
      <div className={styles['content']}>
        <div ref={skillsRef} className={styles.__1px}></div>
        <Content
          textColor={color}
          contentColor={contentColor}
          contentBG={contentBG}
          isSticky={isSticky}
        />
      </div>
      <div></div>
    </section>
  );
};
