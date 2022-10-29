import styles from '@assets/styles/home/home.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeSectionExample = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${styles[textColor]}`}>
        Here is an{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${styles[contentColor]}`}
        >
          example
        </span>{' '}
        of more stuff I could add. What else can go here?
        <div
          className={`${styles['__full_height']} ${styles[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
