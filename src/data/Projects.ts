import { Project } from 'src/types/global';

const Projects: Project[] = [
  {
    title: 'Penitent Nomad',
    category: 'Data Analysis',
    image: '/images/projects/penitentnomad.png',
    description: `<div>
      <h4>QUESTION</h4> I want to know how many areas in the United States are within so many miles of different stores. For example: Which areas in the United States are within 100 miles of an IKEA and 30 miles of a Micro Center? What if I wanted areas also within 50 miles of Store C and 20 miles of Store D? 
    </div>\n
    <div>
      <h4>STORES</h4> The criteria I used for picking stores was first - if it was a store that I enjoyed visiting and second - stores with a relatively limited number of locations, since many larger retail chains are ubiquitous in most or all regions of the country.\n
    </div>
    <div>
      <h4>DATA</h4> All store data was gathered by myself and was either scraped directly from their websites using python's sracpy package or found on an open API endpoint. Data was organized and cleaned using a combination of custom python/javascript scripts and Google Sheets.
    </div>`,
    tags: [
      'Python',
      'Jupyter Notebook',
      'Javascript',
      'Tableau',
      'Google Sheets',
    ],
    links: [
      {
        logo: 'logo-github',
        url: 'https://github.com/voxxtelum/penitent_nomad',
        title: 'Penitent Nomad',
      },
      {
        logo: 'server-outline',
        url: 'https://tinyurl.com/penitentnomaddata',
        title: 'View Data',
      },
      {
        logo: 'earth-outline',
        url: 'https://public.tableau.com/views/PenitentNomad/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
        title: 'View Data on Tableau',
      },
    ],
  },
  {
    title: 'ColorGen',
    category: 'React WebApp',
    image: '/images/projects/colorgen.png',
    description: `<div>
      <h4>WHAT</h4> ColorGen is a color shade generator that turns colors into configurable CSS custom parameters.
    </div>\n
    <div><h4>WHY</h4> While working on a project I was looking for a way to generate many CSS custom parameters for different colors I wanted to experiment with. Although I was able to achieve most of what I needed with SASS, I decided to write a simple JavaScript script so it was easier to use. That little script developed into a much more robust app.</div>`,
    tags: ['Node', 'React', 'Typescript', 'SASS'],
    links: [
      {
        logo: 'link-outline',
        url: '/colorgen',
        title: 'View App',
      },
      {
        logo: 'logo-github',
        url: 'https://github.com/voxxtelum/mbdotdev/tree/main/src/components/ColorGen',
        title: 'View Code on GitHub',
      },
    ],
  },
];

export default Projects;
