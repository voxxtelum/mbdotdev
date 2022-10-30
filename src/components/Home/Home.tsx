import HomeHeader from './HomeHeader';
import { HomeContent } from './HomeContent';
import { HomeSkills } from './Sections/HomeSkills';
import { HomeProjects } from './Sections/HomeProjects';
import { HomeSectionExample } from './Sections/HomeSectionExample';
import { HomeContact } from './Sections/HomeContact';
import { HomeAbout } from './HomeAbout';

function Home() {
  return (
    <>
      <HomeHeader title="Michael Balson"></HomeHeader>
      <HomeAbout></HomeAbout>
      <HomeContent
        textColor="light"
        bgColor="dark"
        accentColor="blue"
        Content={HomeSkills}
      ></HomeContent>
      <HomeContent
        textColor="dark"
        bgColor="yellow"
        accentColor="yellow"
        Content={HomeProjects}
      ></HomeContent>
      <HomeContent
        textColor="light"
        bgColor="dark"
        accentColor="purple"
        Content={HomeSectionExample}
      ></HomeContent>
      <HomeContent
        textColor="dark"
        bgColor="opal"
        accentColor="yellow"
        Content={HomeContact}
      ></HomeContent>
    </>
  );
}
export default Home;
