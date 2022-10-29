import HomeHeader from './HomeHeader';
import { HomeContent } from './HomeContent';
import { HomeSkills } from './HomeSkills';

function Home() {
  return (
    <>
      <HomeHeader title="Michael Balson"></HomeHeader>
      <HomeContent
        bgColor="yellow"
        accentColor="blue"
        Content={HomeSkills}
      ></HomeContent>
    </>
  );
}
export default Home;
