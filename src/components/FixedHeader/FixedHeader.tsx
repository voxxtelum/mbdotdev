import React, { useContext } from 'react';
import { StylesContext } from '@context/Styles';

interface HeaderProps {
  title: string;
}

export const FixedHeader = ({ title }: HeaderProps) => {
  const { styles, utility } = useContext(StylesContext);

  return (
    <div className={styles['fixed__header_container']}>
      <h1>{title}</h1>
    </div>
  );
};
