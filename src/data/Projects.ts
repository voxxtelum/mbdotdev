import { Project } from 'src/types/global';

const Projects: Project[] = [
  {
    title: 'Micro Center',
    category: 'Data Analysis',
    image: '/images/projects/proj_micro.webp',
    internalLink: '/projects/microcenter/story',
    internalLinkText: 'View Project Page',
    internalLinkIcon: 'arrow-forward-circle-outline',
    description: `<div>
      Micro Center is an online and retail store chain that offers computer, electronic, networking, and communication devices. They differ from their competition in that they carry products that target a much wider audience, offering products and services tailored for beginners as well as more knowledgeable enthusiasts and experts.\n
      </div>
      <div>
      Anecdotally, Micro Center is famous for having very competitive prices, with the caveat being most of these deals are only found in their brick-and-mortar locations. Additionally, they are infamous for their few number of stores.\n
    </div>
    <div>
      Recently, I have been thinking a lot about moving to a new area and considering aspects of places I've lived previously that I missed. One of those was being close to a Micro Center, which led me to ask, which locations would be most suitable for a possible new expansion of Micro Center?
    </div>`,
    tags: [
      'Python',
      'SQL',
      'Jupyter Notebook',
      'Javascript',
      'Tableau',
      'Google Sheets',
    ],
    links: [
      {
        logo: 'logo-github',
        url: 'https://github.com/voxxtelum/microcenter-study',
        title: 'View Code on GitHub',
      },
      {
        logo: 'server-outline',
        url: 'https://tinyurl.com/microcenter-study',
        title: 'View Data',
      },
      {
        logo: 'earth-outline',
        url: 'https://public.tableau.com/views/MicroCenter/PredictionsbyCurrentandMajorInterstates?:language=en-US&:display_count=n&:origin=viz_share_link',
        title: 'View on Tableau',
      },
    ],
  },
  {
    title: 'Penitent Nomad',
    category: 'Data Analysis',
    image: '/images/projects/proj_nomad.webp',
    internalLink: null,
    internalLinkText: null,
    internalLinkIcon: null,
    description: `<div>
      <h4>QUESTION</h4> I want to know how many areas in the United States are within so many miles of different stores. For example: Which areas in the United States are within 100 miles of an IKEA and 30 miles of a Micro Center? What if I wanted areas also within 50 miles of Store C and 20 miles of Store D? 
    </div>\n
    <div>
      <h4>STORES</h4> The criteria I used for picking stores was first - if it was a store that I enjoyed visiting and second - stores with a relatively limited number of locations, since many larger retail chains are ubiquitous in most or all regions of the country.\n
    </div>
    <div>
      <h4>DATA</h4> All store data was gathered by myself and was either scraped directly from their websites using Python's <code>sracpy</code> package or found on an open API endpoint. Data was organized and cleaned using a combination of custom Python and JavaScript scripts and Google Sheets.
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
    category: 'React App',
    image: '/images/projects/proj_colorgen.webp',
    internalLink: null,
    internalLinkText: null,
    internalLinkIcon: null,
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
