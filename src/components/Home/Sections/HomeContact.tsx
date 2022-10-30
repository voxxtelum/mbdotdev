import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';
import { HomeSectionProps } from 'src/types/Home';
import { ContactLink } from './ContactLink';
import IonIcon from '@reacticons/ionicons';

const email = {
  logo: 'mail-sharp' as const,
  url: 'mailto:michael@balson.email?subject=Hello Michael!',
  title: 'michael@balson.email',
};
const github = {
  logo: 'logo-github' as const,
  url: 'https://www.github.com/voxxtelum',
  title: 'GitHub',
};
const linkedin = {
  logo: 'logo-linkedin' as const,
  url: 'https://www.linkedin.com/in/michael-balson-630924244/',
  title: 'LinkedIn',
};

export const HomeContact = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        <div className={`${styles['contact__wrapper']}`}>
          <h2 className={`${styles['contact__title']}`}>Get in touch</h2>
          <ContactLink {...email} />
          <ContactLink {...github} />
          <ContactLink {...linkedin} />
        </div>
        {/* <div
          className={`${utility['__full_height']} ${utility[contentBG]}`}
        ></div> */}
      </div>
    </>
  );
};
