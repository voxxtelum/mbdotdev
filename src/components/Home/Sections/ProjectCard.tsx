import { StylesContext } from '@context/Styles';
import React from 'react';
import IonIcon from '@reacticons/ionicons';
import Projects from '@data/Projects';

export const ProjectCard = () => {
  const { styles, utility } = React.useContext(StylesContext);

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
              <div className={styles['project__info']}>
                <h3 className={styles['project__title']}>{title}</h3>
                <div className={styles['project__tag__cloud']}>
                  <div>
                    <span className={styles['project__category']}>
                      {category}
                    </span>
                  </div>
                  <div className={styles['project__tags']}>
                    {tags.map((tag, tagIndex) => (
                      <span
                        key={`${tagIndex}-${tag}`}
                        className={styles['project__tag']}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles['project__description']}>{description}</p>
                <div className={styles['project__links']}>
                  {links.map(({ logo, title: linkTitle, url }, linkIndex) => (
                    <div
                      key={`${logo}-${linkIndex}`}
                      className={styles['project__link__wrapper']}
                    >
                      <div className={styles['project__link__logo']}>
                        <IonIcon name={logo}></IonIcon>
                      </div>
                      <div className={`${styles['project__link']}`}>
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
