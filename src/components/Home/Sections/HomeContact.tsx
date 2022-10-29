import styles from '@assets/styles/home/home.module.css';
import { HomeSectionProps } from 'src/types/Home';

export const HomeContact = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${styles[textColor]}`}>
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${styles[contentColor]}`}
        >
          Get in touch
        </span>
        <div
          className={`${styles['__full_height']} ${styles[contentBG]}`}
        ></div>
      </div>
    </>
  );
};
