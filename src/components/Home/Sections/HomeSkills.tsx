import styles from '@assets/styles/home/home.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeSkills = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${styles[textColor]}`}>
        This is where all of my{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${styles[contentColor]}`}
        >
          skills
        </span>{' '}
        would go. Look what else I can dommmmmmmm.
        <div
          className={`${styles['__full_height']} ${styles[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
