import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { FixedHeader } from '@components/FixedHeader/FixedHeader';
import { StylesContext } from '@context/Styles';

const APP_TITLE = import.meta.env.MB_APP_TITLE;

export const Projects = () => {
  const { styles } = useContext(StylesContext);

  return (
    <>
      <FixedHeader title={APP_TITLE} />
      <div className={styles['fixed__header_spacer']}></div>
      <Outlet />
    </>
  );
};
