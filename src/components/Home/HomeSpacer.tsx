import React from 'react';
import styles from '@assets/styles/home/home.module.css';

export const HomeSpacer = React.forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <>
      <div
        className={`${styles['__full_height']} ${styles['home__spacer_background']}`}
        ref={ref}
      ></div>
    </>
  );
});
