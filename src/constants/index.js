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
  postgresql,
  skyalign,
  generalassembly,
  bwd,
  yimby,
  customaize,
  jobplay,
  pix,
  threejs,
  flavorite,
  tictacts,
  sequelize,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Sequelize",
    icon: sequelize,
  }
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "General Assembly",
    icon: generalassembly,
    iconBg: "#FFFFFF",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Blue Water Drones",
    icon: bwd,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Present",
    points: [
      "Developing and executing social media strategies to increase engagement and grow the company's online presence.",
      "Analyzing data to make informed decisions on social media content and engagement.",
      "Utilizing drone technology to capture aerial footage of construction sites, leveraging technical expertise to contribute to project progress updates and collaborate with cross-functional teams."
    ],
  },
  {
    title: "Writer",
    company_name: "YIMBY",
    icon: yimby,
    iconBg: "#FFFFFF",
    date: "Apr 2021 - Present",
    points: [
      "Authored 900+ articles on Florida's architecture, construction, and real estate developments, resulting in 170k monthly page views.",
      "Captured and processed high-quality photos of construction sites and buildings using advanced photography tools and software.",
      "Implemented a content strategy targeting increased awareness and traffic for Florida YIMBY, leveraging SEO practices.",,
    ],
    link: "https://floridayimby.com/author/oscar"
  },
  {
    title: "Photographer - Drone Pilot",
    company_name: "Skyalign Visual LLC",
    icon: skyalign,
    iconBg: "#FFFFFF",
    date: "Oct 2020 - Present",
    points: [
      "Successfully founded and operate own LLC, demonstrating entrepreneurial initiative and management skills.",
      "Produceing high-quality images and footage of construction sites and developments, adhering to client specifications.",
      "Providing detailed visual documentation for stakeholders such as developers and architects, utilizing technical skills and precision.",
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