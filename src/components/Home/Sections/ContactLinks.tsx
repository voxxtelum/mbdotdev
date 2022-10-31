import { StylesContext } from '@context/Styles';
import React from 'react';
import { LinksArray } from 'src/types/Home';
import { ContactLink } from './ContactLink';

export const ContactLinks = ({ linksArray }: LinksArray) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      {linksArray.map((link) => (
        <ContactLink logo={link.logo} url={link.url} title={link.title} />
      ))}
    </>
  );
};
