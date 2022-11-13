import React, { useContext } from 'react';
import { StylesContext } from '@context/Styles';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export const FixedHeader = ({ title }: HeaderProps) => {
  const { styles } = useContext(StylesContext);

  return (
    <div className={styles['fixed__header_container']}>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  );
};
