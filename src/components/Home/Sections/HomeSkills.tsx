import styles from '@assets/styles/home/home.module.css';

import utility from '@assets/styles/base/_utility.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeSkills = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        This is where all of my{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          skills
        </span>{' '}
        would go. Look what else I can dommmmmmmm.
        <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
