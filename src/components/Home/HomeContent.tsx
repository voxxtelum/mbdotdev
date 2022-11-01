import { StylesContext } from '@context/Styles';
import React, { useRef, useEffect, useState } from 'react';

import { HomeContentProps } from 'src/types/global';

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

  const backgroundColor = bgColor ? `bg__${bgColor}` : `bg__dark`;

  const contentColor = accentColor ? `color__${accentColor}` : `color__blue`;
  const contentBG = accentColor ? `bg__${accentColor}` : `bg__blue`;

  const color = textColor ? `color__${textColor}` : `color__light`;

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
      skillsBox ? observer.unobserve(skillsBox) : null;
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
