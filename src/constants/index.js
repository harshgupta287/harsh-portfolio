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
  threejs,
  degree,
  chatty,
  news,
  whatsapp,
  health,
  dynamic,
  blog
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
    title: "Programming",
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
    title: "Secondary Education",
    company_name: "Nav Jeevan Mission School",
    icon: degree,
    iconBg: "#383E56",
    date: "March 2018 - April 2019",
    points: [
      "Completed 10th grade from Nav Jeevan Mission School in my hometown under the CBSE board, securing 85.6%.",
    ],
  },
  {
    title: "Senior Secondary Education",
    company_name: "Oxford Public School",
    icon: degree,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Completed 12th grade at Oxford Public School in Gorakhpur, Uttar Pradesh, under the CBSE board, securing 75%.",
    ],
  },
  {
    title: "Bachelor of Technology",
    company_name: "Sardar Vallabhbhai National Institute of Technology, Surat",
    icon: degree,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Currently pursuing a B.Tech degree in Computer Science and Engineering from SVNIT, with a CGPA of 7.61.",
    ],
  },
];

const projects = [
  {
    name: "Blog Application",
    description:
      "A Blog Application is to build a full-featured MERN stack platform where users can share their thoughts, read posts, and interact with others through features like categories, search, likes, and comments.",

    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link:
      "https://github.com/harshgupta287/Blogs",
  },
  {
    name: "Chatty",
    description:
      "A real-time chat application that enables users to send and receive messages instantly, create chat rooms, and connect seamlessly with friends or colleagues in a secure and responsive environment.",

    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatty,
    source_code_link:
      "https://github.com/harshgupta287/Chatty---A-real-time-chat-app",
  },
  {
    name: "WhatsApp Chat Analyzer",
    description:
      "This is a WhatsApp Chat Analyzer built using Streamlit. It allows users to upload exported WhatsApp chat files and provides insightful analytics, including message statistics, activity trends and word usage.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit ",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib & seaborn ",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/harshgupta287/Whatsapp-Chat-Analyzer",
  },
  {
    name: "Trendy News",
    description:
      "Trendy News is a React-based news application that fetches top headlines from the NewsAPI and displays. Users can search for specific news topics like Sports, Politics, Entertainment, Health, Fitness, and Crime.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "newsAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/harshgupta287/News-Website",
  },
  {
    name: "Dynamic Pricing Model",
    description:
      "For Ride Fare Prediction is Streamlit-based web application predicts ride fares using a dynamic pricing model based on demand, supply, and ride-specific factors. It incorporates a machine learning model to estimate pricing dynamically.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit ",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: dynamic,
    source_code_link: "https://github.com/harshgupta287/Dynamic-Pricing-Model",
  },
  {
    name: "Health and Wellness",
    description:
  "A comprehensive healthcare platform that allows users to book appointments, consult with doctors online, access medical records, and receive personalized health recommendations, all from the comfort of their home.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      ,
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      ,
      {
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/harshgupta287/Nexus",
  },
];

export { services, technologies, experiences, projects };
