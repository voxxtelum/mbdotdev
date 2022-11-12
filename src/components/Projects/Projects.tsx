import React from 'react';
import { Outlet } from 'react-router-dom';
export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <Outlet />
    </>
  );
};
