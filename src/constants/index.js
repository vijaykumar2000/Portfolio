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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    title: "JavaScript Developer",
    company_name: "Zest India IT Services",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Designing and developing scalable, efficient, and reusable JavaScript code for web applications.",
      "Implementing JavaScript best practices and coding standards to ensure maintainable, readable, and efficient code.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Zest India IT Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zest India IT Services",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, and other related technologies.",
      "Optimizing web applications for performance and scalability.",
      "Developing user interfaces with a focus on usability and user experience.",
      "Testing and troubleshooting web applications to ensure high-quality deliverables.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Zest India IT Services",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Building and integrating RESTful APIs and microservices to support seamless front-end and back-end interaction.",
      "Managing database operations, including data modeling and optimization, using MongoDB and MySQL.",
      "Ensuring application security, scalability, and performance optimization at both the frontend and backend levels.",
      "Collaborating with DevOps teams to manage and optimize the CI/CD pipeline and infrastructure setup.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I never thought a website could truly reflect the quality of our product, but this one completely proved me wrong.",
    name: "Vanya Goel ",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    testimonial:
      "I've never encountered a web developer who genuinely cares about their clients' success like this one does.",
    name: "Tashi Dorji",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "After the website optimization, our traffic surged by 50%. We’re incredibly grateful for the results!",
    name: "Elsie Hall",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const projects = [
  {
    name: "Discord - The Ultimate Community",
    description:
      "Web-based platform that allows users to communicate, collaborate, and manage communities with voice, video, and text features, providing a convenient and efficient solution for online interaction and gaming needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Event Booking",
    description:
      "Online platform that allows users to search, book, and manage event tickets from various organizers, offering a convenient and efficient solution for attending and participating in events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Delivery App",
    description:
      "Digital platform that allows users to explore menus, place food orders, and receive deliveries from local restaurants, providing a quick and hassle-free solution for dining at home.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
