import { Project } from 'src/types/global';

const Projects: Project[] = [
  {
    title: 'Example Project',
    category: 'Category',
    image: 'https://unsplash.it/800',
    description:
      "Not if I weaken first. Your shields were failing, sir. Fear is the true enemy, the only enemy. Computer, belay that order. I think you've let your personal feelings cloud your judgement. Congratulations - you just destroyed the Enterprise. That might've been one of the shortest assignments in the history of Starfleet. Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? What's a knock-out like you doing in a computer-generated gin joint like this? I'll be sure to note that in my log. Ensign Babyface! In all trust, there is the possibility for betrayal. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.",
    tags: ['tag1', 'longtag2', 'reallylongtag3'],
    links: [
      {
        logo: 'globe-outline',
        url: 'https://www.nasa.gov',
        title: 'NASA.gov',
      },
      {
        logo: 'logo-github',
        url: 'https://www.github.com',
        title: 'github.com/projectname',
      },
    ],
  },
];

export default Projects;
