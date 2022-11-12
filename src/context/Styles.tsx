import React from 'react';
import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';
import projects from '@assets/styles/projects/projects.module.css';

type StylesProps = {
  children: React.ReactNode;
};

const StylesContext = React.createContext({ styles, utility, projects });

const StylesProvider = (props: StylesProps) => {
  return (
    <StylesContext.Provider value={{ styles, utility, projects }}>
      {props.children}
    </StylesContext.Provider>
  );
};

export { StylesContext, StylesProvider };
