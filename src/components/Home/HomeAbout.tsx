import { StylesContext } from '@context/Styles';
import React from 'react';

export const HomeAbout = () => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div
        className={`${styles['about__container']} ${utility['color__dark']} ${utility['bg__yellow']}`}
      >
        <div></div>
        <div className={`${styles['about__text']}`}>
          <p>
            Everyone and everything has a{' '}
            <span
              className={`${styles['about__emphasis']} ${utility['color__yellow']}`}
            >
              story
            </span>
            .
          </p>
          <p>
            My passion is{' '}
            <span className={`${styles['about__stressed']}`}>discovering</span>{' '}
            those stories and{' '}
            <span className={`${styles['about__stressed']}`}>creating</span> new
            ones.
          </p>
          <p>
            As a{' '}
            <span
              className={`${styles['about__emphasis']} ${utility['color__blue']}`}
            >
              data analyst
            </span>
            , I find hidden meaning in data and use it to tell a story that
            drives decision making.
          </p>
          <p>
            As a freelance{' '}
            <span
              className={`${styles['about__emphasis']} ${utility['color__opal']}`}
            >
              developer
            </span>
            , I told stories others could not to encourage user engagement on
            the web.
          </p>
          <p>
            Now, I&apos;m looking for the{' '}
            <span
              className={`${styles['about__emphasis']} ${utility['color__purple']}`}
            >
              next chapter
            </span>{' '}
            in my own story and I hope you can be a part of it.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};
