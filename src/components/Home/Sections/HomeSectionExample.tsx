import { StylesContext } from '@context/Styles';
import React from 'react';
import { HomeSectionProps } from 'src/types/global';

export const HomeSectionExample = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div
        id="open"
        className={`${styles['content__excerpt']} ${utility[textColor]}`}
      >
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          Open
        </span>
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
