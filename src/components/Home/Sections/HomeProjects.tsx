import { StylesContext } from '@context/Styles';
import React from 'react';
import { HomeSectionProps } from 'src/types/global';
import { ProjectCard } from './ProjectCard';

export const HomeProjects = ({
  contentColor,
  contentBG,
  textColor,
  isSticky,
}: HomeSectionProps) => {
  const { styles, utility } = React.useContext(StylesContext);
  return (
    <>
      <div className={`${styles['content__excerpt']} ${utility[textColor]}`}>
        I&apos;m always excited about finding new{' '}
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          projects
        </span>{' '}
        and here are a few you can look at now.
        <div
          className={`${styles['projects__wrapper']} ${utility['__full_height']} ${utility[contentBG]}`}
        >
          <ProjectCard />
        </div>
      </div>
    </>
  );
};
