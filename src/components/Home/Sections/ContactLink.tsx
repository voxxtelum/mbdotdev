import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';
import IonIcon from '@reacticons/ionicons';

type ContactLinkProps = {
  logo: React.ComponentProps<typeof IonIcon>['name'];
  url: string;
  title: string;
};

export const ContactLink = ({ logo, url, title }: ContactLinkProps) => {
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
