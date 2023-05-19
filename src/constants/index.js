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
  tmobile
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
      "Developing social media strategies and writing content to increase engagement and grow the company's online presence.",
      "Analyzing data to make informed decisions on social media content and engagement.",
      "Utilizing drone technology to capture aerial footage of construction sites, leveraging technical expertise to contribute to project progress updates and collaborate with cross-functional teams."
    ],
    link: "https://www.instagram.com/blue_water_drones/"
  },
  {
    title: "Journalist",
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
  {
    title: "Mobile Expert",
    company_name: "T-Mobile",
    icon: tmobile,
    iconBg: "#FFFFFF",
    date: "Oct 2011 - Oct 2022",
    points: [
      "Assisted customers with their mobile wireless needs, facilitating their shopping journey across different platforms (online, Customer Care, or in-store).",
      "Utilized digital tools in interactions and onboarding to demonstrate the benefits of T-Mobile's expanding coverage and services.",
      "Established relationships and partnered with T-Mobile employees across channels, including business and customer service.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Throughout my time working with Oscar, he has always been such a pleasure. He is communicative, organized, thoughtful, creative, dedicated and passionate.",
    name: "Skye Dodd",
    designation: "Senior Admissions Specialist",
    company: "General Assembly",
    image: "https://media.licdn.com/dms/image/D4E03AQGq0V9Jdsuj6w/profile-displayphoto-shrink_800_800/0/1671804915736?e=1689811200&v=beta&t=B3VFQCOS7diRZ9GPbmCu0IrAXhS55KXlZQTekVDA60s",
  },
  {
    testimonial:
      "I highly recommend Oscar for any programming job. He possesses exceptional communication skills and is a talented programmer with an impressive portfolio.",
    name: "Waldo Guevara",
    designation: "President and Founder",
    company: "Inti Technology",
    image: "https://media.licdn.com/dms/image/C4E03AQH-vbdMte6JTQ/profile-displayphoto-shrink_800_800/0/1571714074958?e=1689811200&v=beta&t=kbuWyDCHy05BV1qtFAzAfzxD6TZztWiV6xdpXwUHyyM",
  },
  {
    testimonial:
      "I have no doubt that Oscar would be a valuable addition to any team looking for a skilled and dedicated programmer.",
    name: "Oniel Rosario",
    designation: "iOS Engineer",
    company: "Ibotta, Inc.",
    image: "https://media.licdn.com/dms/image/C4E03AQELILZgIGpjTw/profile-displayphoto-shrink_400_400/0/1542298483017?e=1689811200&v=beta&t=KlvV5NgOKPxW8oxV3iBceh-7q-DYIOmqFuIc6Mft8jI",
  },
  {
    testimonial:
      "I have had the pleasure of working with Oscar on two projects, and I can say with confidence that he is an exceptional problem solver and an outstanding teammate.",
    name: "Patrick Mazara",
    designation: "Software Engineering Fellow",
    company: "General Assembly",
    image: "https://media.licdn.com/dms/image/D4D35AQErEqDAQR8G5g/profile-framedphoto-shrink_400_400/0/1682018631936?e=1685131200&v=beta&t=KXAiXOlg4-nDxijzbbIb64S1ygbVm33ywLRPAIEa5rs",
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