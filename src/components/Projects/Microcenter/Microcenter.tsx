import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StylesContext } from '@context/Styles';

export const Microcenter = () => {
  const { projects: pro } = useContext(StylesContext);
  const activeClassName = pro['project_tab_active'];

  return (
    <>
      <h2>Microcenter</h2>
      <NavLink
        to="story"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        view story
      </NavLink>
      <NavLink
        to="code"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        view code
      </NavLink>
      <Outlet />
    </>
  );
};
