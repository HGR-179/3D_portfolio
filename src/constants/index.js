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
  linkedin_home,
  School_LinkedIn,
  tripguide,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "CSS Styling Explorer",
    company_name: "css",
    icon: css,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JavaScript Enthusiast",
    company_name: "Javascript",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Builder in Training",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Learner",
    company_name: "Reactjs",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
   {
    title: "and more",
    company_name: "EX: redux, C, C#, C++, HTML, three.js, etc.",
    icon: redux,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
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
    name: "My Works",
    description:
      "Feel free to visit my LinkedIn profile, where you'll find a comprehensive overview of my professional background, skills, experiences, and the projects I'm passionate about. It’s the best place to learn more about who I am, what I do, and how I grow.",
    tags: [
      {
        name: "LinkedIn",
        color: "blue-text-gradient",
      },
      {
        name: "Skills",
        color: "green-text-gradient",
      },
      {
        name: "Works",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin_home,
    source_code_link: "https://www.linkedin.com/in/heechan-yang-55aa8133b",
  },
  {
    name: "My School",
    description:
      "Explore the official LinkedIn page of Yongin Samuel International School (YSIS) — a vibrant community dedicated to academic excellence, global citizenship, and nurturing future leaders. Stay connected with our latest updates, events, and inspiring stories from students, alumni, and educators.",
    tags: [
      {
        name: "LinkedIn",
        color: "blue-text-gradient",
      },
      {
        name: "Information",
        color: "green-text-gradient",
      },
      {
        name: "YSIS",
        color: "pink-text-gradient",
      },
    ],
    image: School_LinkedIn,
    source_code_link: "https://www.linkedin.com/company/samuel-international-school/",
  },
  {
    name: "coming soon",
    description:
      "#",
    tags: [
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "coding",
        color: "green-text-gradient",
      },
      {
        name: "projects",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };