import styles from '@assets/styles/home/home.module.css';
import { HomeSkillsProps } from 'src/types/Home';

export const HomeSkills = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSkillsProps) => {
  return (
    <>
      <div id="content__excerpt" className={`${styles['content__excerpt']}`}>
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
