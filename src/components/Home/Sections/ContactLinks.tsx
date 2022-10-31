import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';
import { LinksArray } from 'src/types/Home';
import { ContactLink } from './ContactLink';

export const ContactLinks = ({ linksArray }: LinksArray) => {
  return (
    <>
      {linksArray.map((link) => (
        <ContactLink logo={link.logo} url={link.url} title={link.title} />
      ))}
    </>
  );
};
