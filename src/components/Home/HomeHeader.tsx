import { StylesContext } from '@context/Styles';
import React, { useRef, useState, useEffect } from 'react';
type HeaderProps = {
  title: string;
};

function HomeHeader({ title }: HeaderProps) {
  const { styles, utility } = React.useContext(StylesContext);

  const [isTitleSticky, setTitleIsSticky] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsBox = titleRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setTitleIsSticky(e.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    if (skillsBox) {
      observer.observe(skillsBox);
    }

    // clean up the observer
    return () => {
      skillsBox ? observer.unobserve(skillsBox) : null;
    };
  }, [titleRef]);

  return (
    <>
      <div
        id="title__bar"
        className={`${styles['title__bar__wrapper']} ${
          isTitleSticky ? '' : styles['title__bar_sticky']
        }`}
      >
        <h1>{title}</h1>
      </div>
      <div
        ref={titleRef}
        id="header_container"
        className={styles['header-container']}
      >
        <img alt="background" src="/public/images/michaelbalson.webp"></img>
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
      </div>
      <div className={`${styles['header__bottom__spacer']}`}></div>
    </>
  );
}

export default HomeHeader;
