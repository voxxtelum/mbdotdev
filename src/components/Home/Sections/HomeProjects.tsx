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
      <div
        id="projects"
        className={`${styles['content__excerpt']} ${utility[textColor]}`}
      >
        <div
          className={`${styles['content__title__space_a']} ${utility['bg__purple']}`}
        ></div>
        <span
          className={`${isSticky ? '' : styles['pin__active']} ${
            styles['content__pin_word']
          } ${utility[contentColor]}`}
        >
          Projects
        </span>
        <div
          className={`${styles['content__title__space_b']} ${utility['bg__purple']}`}
        ></div>
        <div
          className={`${styles['projects__wrapper']} ${utility['__full_height']} ${utility[contentBG]}`}
        >
          <ProjectCard />
        </div>
      </div>
    </>
  );
};
