import { StylesContext } from '@context/Styles';
import React from 'react';
import { HomeSectionProps } from 'src/types/Home';

export const HomeProjects = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        I can put some{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          projects
        </span>{' '}
        here. Look at how many there are.
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
