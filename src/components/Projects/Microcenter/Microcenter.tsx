import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StylesContext } from '@context/Styles';

export const Microcenter = () => {
  const { projects: pro } = useContext(StylesContext);
  const activeClassName = pro['project__tab_active'];

  return (
    <>
      <div className={pro['project__wrapper']}>
        <div></div>
        <div>
          <h2>Case Study: A Potential Micro Center Expansion Location</h2>
          <nav className={pro['project__nav']}>
            <NavLink
              to="story"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Story
            </NavLink>
            <NavLink
              to="code"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Code
            </NavLink>
            <NavLink
              to="sources"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Sources & Tools
            </NavLink>
          </nav>
          <Outlet />
        </div>
        <div></div>
      </div>
    </>
  );
};
