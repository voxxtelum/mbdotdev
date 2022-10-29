import styles from '@assets/styles/home/home.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeProjects = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${styles[textColor]}`}>
        I can put some{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${styles[contentColor]}`}
        >
          projects
        </span>{' '}
        here. Look at how many there are.
        <div
          className={`${styles['__full_height']} ${styles[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
