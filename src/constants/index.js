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
  customaize,
  jobplay,
  pix,
  threejs,
  flavorite,
  tictacts
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CustomAIze",
    description:
      "MERN stack application that combines the power of AI with stunning 3D graphics to revolutionize T-shirt customization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: customaize,
    source_code_link: "https://github.com/oscarnunez1/customAIze",
    demo_link: "https://customaize.vercel.app/"
  },
  {
    name: "JobPlay",
    description:
      "Responsive web application that gamifies the job search and skill development process, allowing users to track job applications, visualize career progression, and expand professional networks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: jobplay,
    source_code_link: "https://github.com/luisdaniel0/Jobplay",
    demo_link: "https://job-play.netlify.app/"
  },
  {
    name: "Flavorite",
    description:
      "PERN stack web application using TypeScript that lets users manage their favorite food items with create, view, update, and delete functionalities. Users can sign up, log in, personalize their account, and explore food items shared by other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: flavorite,
    source_code_link: "https://github.com/oscarnunez1/flavorite-front",
    demo_link: "https://flavorite.netlify.app/"
  },
  {
    name: "Pix",
    description:
      "Full CRUD web application that serves as a collaborative platform for music enthusiasts, enabling them to ask questions, receive feedback, and connect with others in the industry. The application also offers a repository for knowledge sharing and accessing lyrics as quotes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pix,
    source_code_link: "https://github.com/CaptMerica/pix-front-end",
    demo_link: "https://pix-tritonic.netlify.app/"
  },
  {
    name: "Tic-Tac-TypeScript",
    description:
      "Web game developed in TypeScript, recreating the classic two-player game with a modern and responsive design.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: tictacts,
    source_code_link: "https://github.com/CaptMerica/pix-front-end",
    demo_link: "https://pix-tritonic.netlify.app/"
  },
];

const links = [
  {
    name: 'Github',
    url: 'https://github.com/oscarnunez1',
    icon: '/src/assets/github.png',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/oscarnunez34/',
    icon: '/src/assets/linkedin.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/OscarInTech',
    icon: '/src/assets/tech/twitter.svg',
  },
  {
    name: 'Resume',
    url: '/src/assets/oscar_nunez_resume.pdf',
    icon: '/src/assets/logo.svg',
  },
];


export { services, technologies, experiences, testimonials, projects, links };