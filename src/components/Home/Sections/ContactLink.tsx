import { StylesContext } from '@context/Styles';
import IonIcon from '@reacticons/ionicons';
import React from 'react';

import { ContactLinkProps } from 'src/types/Home';

export const ContactLink = ({ logo, url, title }: ContactLinkProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div className={`${styles['contact__link']}`}>
        <div className={`${styles['contact__bg']}`}></div>
        <div className={`${styles['contact__logo']}`}>
          <IonIcon name={logo} />
        </div>
        <div className={`${styles['contact__link__wrapper']}`}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
            <span className={`${styles['contact__link__target']}`}></span>
          </a>
        </div>
      </div>
    </>
  );
};
