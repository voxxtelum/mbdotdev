import React, { useContext, useState } from 'react';
import HomeHeader from './HomeHeader';
import { HomeContent } from './HomeContent';
import { HomeSkills } from './Sections/HomeSkills';
import { HomeProjects } from './Sections/HomeProjects';
import { HomeSectionExample } from './Sections/HomeSectionExample';
import { HomeContact } from './Sections/HomeContact';
import { HomeAbout } from './HomeAbout';
import { StylesContext } from '@context/Styles';

function Home() {
  const APP_TITLE = import.meta.env.MB_APP_TITLE;
  const { styles } = useContext(StylesContext);

  const [appTitle, setAppTitle] = useState<string>(APP_TITLE);

  return (
    <>
      <div className={styles['wrapper']}>
        <HomeHeader title={appTitle}></HomeHeader>
        <HomeAbout></HomeAbout>
        <HomeContent
          textColor="dark"
          bgColor="blue"
          accentColor="blue"
          title={appTitle}
          setTitle={setAppTitle}
          Content={HomeProjects}
        ></HomeContent>
        <HomeContent
          textColor="dark"
          bgColor="yellow"
          accentColor="yellow"
          Content={HomeSkills}
          setTitle={setAppTitle}
          title={appTitle}
        ></HomeContent>
        <HomeContent
          textColor="light"
          bgColor="dark"
          accentColor="purple"
          Content={HomeSectionExample}
          setTitle={setAppTitle}
          title={appTitle}
        ></HomeContent>
        <HomeContent
          textColor="dark"
          bgColor="opal"
          accentColor="yellow"
          Content={HomeContact}
          setTitle={setAppTitle}
          title={appTitle}
        ></HomeContent>
      </div>
    </>
  );
}
export default Home;
