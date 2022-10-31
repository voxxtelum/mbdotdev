import { StylesContext } from '@context/Styles';
import React from 'react';
import IonIcon from '@reacticons/ionicons';
import Projects from '@data/Projects';

export const ProjectCard = () => {
  const { styles, utility } = React.useContext(StylesContext);

  // const projectTitle = 'Example Project';
  // const projectImage = 'https://unsplash.it/800';
  // const projectDescription = `Not if I weaken first. Your shields were failing, sir. Fear is the true enemy, the only enemy. Computer, belay that order. I think you've let your personal feelings cloud your judgement. Congratulations - you just destroyed the Enterprise. That might've been one of the shortest assignments in the history of Starfleet. Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? What's a knock-out like you doing in a computer-generated gin joint like this? I'll be sure to note that in my log. Ensign Babyface! In all trust, there is the possibility for betrayal. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.`;
  // const projectTags = ['tag1', 'longtag2', 'reallylongtag3'];
  // const projectLinks = [
  //   { logo: 'globe-outline', url: 'https://www.nasa.gov', title: 'NASA.gov' },
  //   {
  //     logo: 'logo-github',
  //     url: 'https://www.github.com',
  //     title: 'github.com/projectname',
  //   },
  // ] as ContactLinkProps[];

  return (
    <>
      {Projects.map(
        ({ title, category, image, description, tags, links }, index) => {
          return (
            <div
              key={`${index}-${title}`}
              className={styles['project__card__wrapper']}
            >
              <div className={styles['project__image__wrapper']}>
                <img
                  alt={title}
                  className={styles['project__image']}
                  src={image}
                ></img>
              </div>
              <div className={styles['project__card__info']}>
                <h3 className={styles['project_card__title']}>{title}</h3>
                <p className={styles['project_card__description']}>
                  {description}
                </p>
                <div className={styles['project_card_tags']}>
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={`${tagIndex}-${tag}`}
                      className={styles['project__tag']}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles['project__card__links']}>
                  {links.map(({ logo, title: linkTitle, url }, linkIndex) => (
                    <div className={styles['project__link']}>
                      <div className={styles['project__link__logo']}>
                        <IonIcon
                          key={`${logo}-${linkIndex}`}
                          name={logo}
                        ></IonIcon>
                      </div>
                      <div className={`${styles['project__link__wrapper']}`}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {linkTitle}
                          <span
                            className={`${styles['project__link__target']}`}
                          ></span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
