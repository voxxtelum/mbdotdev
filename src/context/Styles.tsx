import React from 'react';
import styles from '@assets/styles/home/home.module.css';
import utility from '@assets/styles/base/_utility.module.css';

const StylesContext = React.createContext({ styles, utility });

const StylesProvider = (props: any) => {
  return (
    <StylesContext.Provider value={{ styles, utility }}>
      {props.children}
    </StylesContext.Provider>
  );
};

export { StylesContext, StylesProvider };
