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
      <div
        id="skills"
        className={`${styles['content__excerpt']} ${utility[textColor]}`}
      >
        <div
          className={`${styles['content__title__space_a']} ${utility['bg__orange']}`}
        ></div>
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          Skills
        </span>
        <div
          className={`${styles['content__title__space_b']} ${utility['bg__orange']}`}
        ></div>
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
