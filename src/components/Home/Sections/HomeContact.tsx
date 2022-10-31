import { HomeSectionProps, ContactLinkProps } from 'src/types/Home';
import { ContactLinks } from './ContactLinks';
import { ContactEmailForm } from './ContactEmailForm';
import React from 'react';
import { StylesContext } from '@context/Styles';

let linksArray = [] as ContactLinkProps[];
linksArray[0] = {
  logo: 'mail-sharp' as const,
  url: 'mailto:michael@balson.email?subject=Hello Michael!',
  title: 'michael@balson.email',
};
linksArray[1] = {
  logo: 'logo-linkedin' as const,
  url: 'https://www.linkedin.com/in/michael-balson-630924244/',
  title: 'LinkedIn',
};
linksArray[2] = {
  logo: 'logo-github' as const,
  url: 'https://www.github.com/voxxtelum',
  title: 'GitHub',
};

export const HomeContact = ({ textColor }: Partial<HomeSectionProps>) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor!]}`}>
        <div className={`${styles['contact__wrapper']}`}>
          <h2 className={`${styles['contact__title']}`}>Get in touch</h2>
          <ContactLinks linksArray={linksArray} />
          <ContactEmailForm />
        </div>
        {/* <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div> */}
      </div>
    </>
  );
};
