import { StylesContext } from '@context/Styles';
import React from 'react';
import { LinksArray } from 'src/types/global';
import { ContactLink } from './ContactLink';

export const ContactLinks = ({ linksArray }: LinksArray) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      {linksArray.map((link, i) => (
        <ContactLink
          key={i}
          logo={link.logo}
          url={link.url}
          title={link.title}
        />
      ))}
    </>
  );
};
