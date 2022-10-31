import { StylesContext } from '@context/Styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

import { HomeContentProps } from 'src/types/Home';

export const HomeContent = ({
  bgColor,
  accentColor,
  textColor,
  Content,
}: HomeContentProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  // this is the element we'll be targeting!
  const skillsRef = useRef<HTMLDivElement>(null);

  let backgroundColor = bgColor ? `bg__${bgColor}` : `bg__dark`;

  let contentColor = accentColor ? `color__${accentColor}` : `color__blue`;
  let contentBG = accentColor ? `bg__${accentColor}` : `bg__blue`;

  let color = textColor ? `color__${textColor}` : `color__light`;

  useEffect(() => {
    const skillsBox = skillsRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
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
      className={`${styles['content__wrapper']} ${utility[backgroundColor]}`}
    >
      <div></div>
      <div className={styles['content']}>
        <div ref={skillsRef} className={utility.__1px}></div>
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
