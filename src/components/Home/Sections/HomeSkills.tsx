import { StylesContext } from '@context/Styles';
import React from 'react';
import { HomeSectionProps } from 'src/types/global';

export const HomeSkills = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        Here are some of the{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          skills
        </span>{' '}
        I&apos;ve picked up along my path.
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
