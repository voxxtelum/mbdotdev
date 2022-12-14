import { StylesContext } from '@context/Styles';
import React from 'react';

const HomeSpacer = React.forwardRef<HTMLDivElement, any>((_, ref) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div
        className={`${utility['__full_height']} ${styles['home__spacer_background']}`}
        ref={ref}
      ></div>
    </>
  );
});

HomeSpacer.displayName = 'HomeSpacer';

export default HomeSpacer;
