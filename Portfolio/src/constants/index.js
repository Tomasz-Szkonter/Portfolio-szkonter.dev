import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  herobg,
  webdevelopment,
  reactdevelopment,
  cmsdevelopment,
  seooptimisation,
  logo,
  chimeraPrime,
  sunriseSystem,
} from '../assets';

export const navLinks = [
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Development',
    icon: webdevelopment,
  },
  {
    title: 'React.JS Development',
    icon: reactdevelopment,
  },
  {
    title: 'CMS Development',
    icon: cmsdevelopment,
  },
  {
    title: 'SEO Optimisation',
    icon: seooptimisation,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer - Freelance',
    company_name: 'Szkonter Development',
    icon: logo,
    iconBg: '#383E56',
    date: 'March 2020 - Current',
    points: [
      'Developing custom WordPress, HubSpot and Webflow themes or implement existing ones to meet client needs.',
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Designing websites and interfaces to achieve optimal user experience and interface design',
      'Regularly maintain and update client websites to ensure optimal functionality and optimal performance.',
      'Provide comprehensive SEO services, including optimization, monitoring, and regular reporting on the effectiveness of strategies implemented.',
      'Participating in client meetings and providing constructive feedback and guidance to other parties.',
    ],
  },
  {
    title: 'Junior Front-End Developer',
    company_name: 'Chimera Prime - IT Consulting',
    icon: chimeraPrime,
    iconBg: '#E6DEDD',
    date: 'June 2022 - April 2023',
    points: [
      'Facilitate the development and growth of HubSpot websites by creating custom themes, landing pages, and optimizing SEO and performance',
      'Ensure optimal functionality and performance of company websites and web tools through regular maintenance and updates.',
      'Collaborate with teams of designers and marketers on a daily basis to identify and implement strategies aimed at improving conversion rates.',
      `Integrate complex front-end features with React.js for client's websites to enhance user experience and interface design.`,
      'Continuously generate documentation and guidelines for future development to ensure consistency and efficient project management.'
    ],
  },
  {
    title: 'SEO Intern',
    company_name: 'Chimera Prime - IT Consulting',
    icon: sunriseSystem,
    iconBg: '#383E56',
    date: 'February 2022 - June 2022',
    points: [
      'Formulate and implement strategies aimed at enhancing organic search rankings and driving increased search traffic.',
      'Conduct on-site optimization procedures, including the optimization of page titles, URLs, redirects, internal link structures, SEO copy editing, and regular review and maintenance of sitemaps.',
      'Design and develop minor web elements, such as sliders or carousels, for clients.',
      'Provide in-depth SEO analysis and recommendations on website and web page structures, based on thorough research and analysis.',
      'Conduct comprehensive keyword research to identify and target new keywords, as well as to explore and develop effective content strategies.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Coming Soon...',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: herobg,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Coming Soon...',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: herobg,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Coming Soon...',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: herobg,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Coming Soon...',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: herobg,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
