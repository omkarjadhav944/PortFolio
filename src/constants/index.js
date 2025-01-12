import {
  // mobile,
  backend,
  frontend,
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
  SQL,
  git,
  figma,
  Php,
  meta,
  WhiteCode,
  tesla,
  shopify,
  Myntraclone,
  SocialMedia,
  TextUtils,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
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
    name: "Php",
    icon: Php,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "WhiteCode",
    icon: WhiteCode,
    iconBg: "#FFF",
    date: "May 2024 - Present",
    points: [
      "Developed WCAG-compliant web applications for colleges, streamlining information collection and management.",
      "Built responsive websites using HTML, CSS, JavaScript, and Bootstrap, Tailwind, and ReactJS, AngularJS, and ensuring seamless user experiences across devices.",
      "Managed CMS-based content updates, optimized websites, and performed CRUD operations for admissions, staff, and alumni data using MySQL with MVC architecture.",
      "Implemented backend functionality using PHP and SQL for efficient database management and developed dynamic, responsive user interfaces with ReactJS and AngularJS.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Omkar's dedication, adaptability, and technical skills make him a valuable asset to any development team.",
    name: "Dattatray Laykar",
    designation: "Team Lead",
    company: "WhiteCode",
    image: "public/Datta.jpg",

  },
  {
    testimonial:
      "Omkar excels in solving complex problems, building dynamic UIs, and optimizing back-end systems.",
    name: "Ganesh Samgir",
    designation: "Senior Developer",
    company: "WhiteCode",
    image: "/ganesh.jpg",
  }, {
    testimonial:
      "Omkar is a skilled developer in React, AngularJS, PHP, and SQL, creating efficient solutions.",
    name: "Shubham Gaikwad",
    designation: "Collegue",
    company: "WhiteCode",
    image: "public/shubham.jpg",
  },



];

const projects = [
  {
    name: "Myntra Clone",
    description:
      "Integrated Redux for state management and React Router for seamless navigation. Built a Myntra-like project with a Node.js backend, leveraging useContext for shared state and dynamic content from a local server",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "yellow-text-gradient",
      },
      {
        name: "Node.js",
        color: "red-text-gradient",
      },
    ],
    image: Myntraclone,
    source_code_link: "https://github.com/omkarjadhav944/Myntra-Clone/",
  },
  {
    name: "Social Media",
    description:
      "Integrated DummyAPI to fetch and display posts dynamically, added new posts with useState and useReducer, managed lifecycle and context with React hooks, and enabled seamless navigation using React Router.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "State Management",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "purple-text-gradient",
      },
      {
        name: "API Integration",
        color: "orange-text-gradient",
      },
    ],
    image: SocialMedia,
    source_code_link: "https://github.com/omkarjadhav944/Social-Media",
  },
  {
    name: "TextUtils",
    description:
      "This project is designed to count words and characters, estimate the time required to read the text, and provide functionalities to convert it to uppercase, lowercase, normal, italic, underline, or remove the underline.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Word Count",
        color: "purple-text-gradient",
      },
      {
        name: "Text Conversion",
        color: "orange-text-gradient",
      },
      {
        name: "Reading Time",
        color: "red-text-gradient",
      },
    ],
    image: TextUtils,
    source_code_link: "https://github.com/omkarjadhav944/Textutils",
  },
];

export { services, technologies, experiences, testimonials, projects };
