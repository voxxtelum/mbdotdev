import React from 'react';
import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';

export const HomeSpacer = React.forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <>
      <div
        className={`${utility['__full_height']} ${styles['home__spacer_background']}`}
        ref={ref}
      ></div>
    </>
  );
});
