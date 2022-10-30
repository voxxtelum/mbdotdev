import styles from '@assets/styles/home/home.module.css';

import utility from '@assets/styles/base/_utility.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeSectionExample = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        Here is an{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          example
        </span>{' '}
        of more stuff I could add. What else can go here?
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
