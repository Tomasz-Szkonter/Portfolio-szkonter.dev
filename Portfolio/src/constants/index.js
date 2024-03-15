import {
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
  threejs,
  herobg,
  webdevelopment,
  reactdevelopment,
  cmsdevelopment,
  seooptimisation,
  logo,
  chimeraPrime,
  sunriseSystem,
  testimonialsNestovia,
  testimonialsFotelownia,
  testimonialsBarczynska,
  projectPortfolio,
  SDOrders,
  epokTheme,
  comingSoon,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'My experience',
  },
  {
    id: 'projects',
    title: 'Projects',
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
      'During the website development process, Tomasz assisted us in gaining a better comprehension of SEO principles.',
    name: 'Fotelownia Team',
    designation: 'COO',
    company: 'Fotelownia',
    image: testimonialsFotelownia,
  },
  {
    testimonial:
      "Grand job done by this individual. His solutions allowed us to recover time for optimising our processes.",
    name: 'Grzegorz',
    designation: 'CEO',
    company: 'Nestovia',
    image: testimonialsNestovia,
  },
  {
    testimonial:
      "Tomasz provided invaluable assistance in launching my eCommerce venture, offering solutions for all our requirements.",
    name: 'Adrianna Barczyńska',
    designation: 'Owner',
    company: 'Barczyńska Dietetyk',
    image: testimonialsBarczynska,
  },
];

const projects = [
  {
    name: 'Epok Theme - Custom Wordpress Hybrid Theme',
    description:
      'Theme crafted for speed and efficiency, it boasts a lightweight design optimized for swift performance. By embracing block-oriented elements, it offers seamless content management and customization. Integrated seamlessly with WooCommerce, it empowers e-commerce functionalities effortlessly. Designed as a tech demo and boilerplate for Szkonter dev clients',
    tags: [
      {
        name: 'WordPress',
        color: 'blue-text-gradient',
      },
      {
        name: 'PHP',
        color: 'green-text-gradient',
      },
      {
        name: 'WooCommerce',
        color: 'pink-text-gradient',
      },
      {
        name: 'React.JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JS',
        color: 'orange-text-gradient',
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient',
      },
    ],
    image: epokTheme,
    source_code_link: '',
  },
  {
    name: 'Order and Report System - Custom Plugin',
    description:
      'Successfully completed a significant project by creating a custom WordPress plugin for an Order and Reporting System, incorporating essential business features. The plugin seamlessly integrates with WordPress, contributing to a streamlined workflow and enhancing overall functionality.',
    tags: [
      {
        name: 'WordPress',
        color: 'blue-text-gradient',
      },
      {
        name: 'PHP',
        color: 'green-text-gradient',
      },
      {
        name: 'JS',
        color: 'orange-text-gradient',
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient',
      },
    ],
    image: SDOrders,
    source_code_link: '',
  },
  {
    name: 'szkonter.dev website',
    description:
      'Step into my portfolio website crafted with React.js, Three.js, and Tailwind CSS. This project embraces responsive web design, ensuring a seamless experience on various devices. What sets it apart is the mesmerizing integration of 3D models that bring my work to life.',
    tags: [
      {
        name: 'React.JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.JS',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind.CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: projectPortfolio,
    source_code_link: 'https://github.com/Tomasz-Szkonter/Portfolio-szkonter.dev',
  },
  {
    name: 'Coming Soon...',
    description:
      'NEXT.JS Dashboard app',
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
    image: comingSoon,
    source_code_link: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
