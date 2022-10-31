import React from 'react';
import { StylesContext } from '@context/Styles';

export const ContactEmailForm = () => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <p className={utility['color__blue']}>Hello There</p>
    </>
  );
};
