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
  woofurs,

  learnsmasher,

  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Experience',
    href: '/Experience',
  },
  {
    id: 3,
    name: 'Education',
    href: '/education',
  },
 
  {
    id: 6,
    name: 'Projects',
    href: '/Projects',
  },
  {
    id: 7,
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 4,
    name: 'Old Portfolio',
    href: 'https://hasir-portfolio.netlify.app/',
  },
  {
    id:8,
    name: 'Resume',
    href: 'https://linktr.ee/haxir_ali',
  }
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

export const PROJECTS = [
  // New Projects
  {
    name: "FigGen - Figma to Code converter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRns_x_Dn8OPniik8QOWGphDJSO2jwDnbRGHw&s",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "ByteBuddy - Tinder for Developers",
    image: "https://via.placeholder.com/300x200.png?text=ByteBuddy",
    description: "A Tinder-like app where developers can match based on their tech stack.",
    url: "https://github.com/hasir-ali/ByteBuddy",
    tech: ["react", "node.js", "mongodb", "express", "tailwind"],
  },
  {
    name: "Foodinger - Food Discovery App",
    image: "https://via.placeholder.com/300x200.png?text=Foodinger",
    description: "An app to discover the best food around based on user reviews and ratings.",
    url: "https://github.com/hasir-ali/Foodinger",
    tech: ["react", "node.js", "mongodb", "express"],
  },
  {
    name: "Weather App",
    image: "https://via.placeholder.com/300x200.png?text=Weather+App",
    description: "A weather forecasting app that provides real-time weather data using a public API.",
    url: "https://github.com/hasir-ali/WeatherApp",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "Taskify - Task Management App",
    image: "https://via.placeholder.com/300x200.png?text=Taskify",
    description: "A simple to-do list app to help users manage their tasks efficiently.",
    url: "https://github.com/hasir-ali/Taskify",
    tech: ["react", "node.js", "express", "mongodb"],
  },
  // Old Projects
  {
    name: "WonderLust Travel",
    image: "Capture1",
    description: "A travel planning platform for adventurers.",
    url: "https://github.com/hasirali/WonderLustTrip/tree/main/WonderLustTrip-main",
    live: "https://wonder-lust-trip.netlify.app/",
    tech: ["react", "javascript", "html", "css"],
  },
  {
    name: "Disney+Hotstar Clone",
    image: "Capture4",
    description: "A clone of the Disney+Hotstar home page.",
    url: "https://github.com/hasirali/Disney-Hotstar",
    live: "https://disney-hotstar-clone-hasir.netlify.app/",
    tech: ["html", "css", "bootstrap"],
  },
  {
    name: "Digital Clock React",
    image: "DigitalClock",
    description: "A digital clock built using React.",
    url: "https://github.com/hasirali/DigitalClock_JS",
    live: "https://digital-clock-test.netlify.app/",
    tech: ["html", "css", "javascript", "react"],
  },
  {
    name: "Car-E-Commerce",
    image: "Car",
    description: "E-commerce platform for cars.",
    url: "https://github.com/hasirali/Basic-HTML-CSS-JS/tree/main/projects/cars%20website",
    live: "https://car-practice.netlify.app/",
    tech: ["html", "css", "javascript", "react"],
  },
  {
    name: "Portfolio Website",
    image: "Portfolio",
    description: "My personal portfolio website showcasing my work and skills.",
    url: "https://github.com/hasirali/Portfolio",
    live: "https://hasir-portfolio.netlify.app/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "E-Library",
    image: "ELibrary",
    description: "An online library system for managing digital books and records.",
    url: "https://github.com/hasirali/E-Library",
    live: "https://e-library.netlify.app/",
    tech: ["react", "node.js", "express", "mongodb"],
  },
  {
    name: "Blogging Platform",
    image: "BloggingPlatform",
    description: "A blogging platform where users can write and publish articles.",
    url: "https://github.com/hasirali/BloggingPlatform",
    live: "https://blogging-platform.netlify.app/",
    tech: ["react", "redux", "node.js", "mongodb"],
  },
  {
    name: "To-Do App",
    image: "ToDo",
    description: "A basic to-do app for task management.",
    url: "https://github.com/hasirali/ToDoApp",
    live: "https://todo-app.netlify.app/",
    tech: ["react", "html", "css", "javascript"],
  },
  {
    name: "Quiz App",
    image: "QuizApp",
    description: "A fun and interactive quiz app.",
    url: "https://github.com/hasirali/QuizApp",
    live: "https://quiz-app.netlify.app/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "Weather Forecasting App",
    image: "WeatherForecast",
    description: "Provides real-time weather data for cities worldwide.",
    url: "https://github.com/hasirali/WeatherApp",
    live: "https://weather-forecast-app.netlify.app/",
    tech: ["react", "api", "javascript"],
  },
  {
    name: "Expense Tracker",
    image: "ExpenseTracker",
    description: "Tracks daily expenses with category-wise breakdowns.",
    url: "https://github.com/hasirali/ExpenseTracker",
    live: "https://expense-tracker.netlify.app/",
    tech: ["react", "redux", "javascript"],
  },
  {
    name: "E-Commerce Store",
    image: "ECommerceStore",
    description: "An online store for various products.",
    url: "https://github.com/hasirali/ECommerceStore",
    live: "https://ecommerce-store.netlify.app/",
    tech: ["react", "node.js", "express", "mongodb"],
  },
  // Continue adding the rest of the 24 old projects here in the same format.
];
export default technologies;

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];



export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bachelor of Technology',
    pos: 'United College of Engineering & Research',
    duration: '2020 - Present   [7.5 CGPA]',
    title: "I hold a B.Tech in Information Technology and have built strong fundamentals in C/C++, DSA, OOPs, CN, OS, and the MERN stack. I've also gained experience through coding competitions, college activities, internships, and freelance projects.",
    icon: '/assets/AKTU.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Delhi Public School',
    pos: 'Intermediate (XII)',
    duration: '2019 - 2020 [82%] ',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/DPS.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Delhi Public School',
    pos: 'High School (X)',
    duration: '2017 - 2018 [80%]',
    title: "During high school at Delhi Public School, I explored various fields and discovered my passion for computers. This led me to decide to pursue a career in Information Technology, setting the foundation for my future studies and career path in the tech industry.",
    icon: '/assets/DPS.svg',
    animation: 'salute',
  },
  
];

export const experiences = [

  {
    title: 'Full stack Developer',
    company_name: 'Woofurs',
    icon: woofurs,
    iconBg: '#fff',
    date: 'Nov 2023 - Present',
    points: [
      'Developing a Next.js-based microservice application to enhance Woofurs functionality and scalability.',
      'Collaborating with the team to pitch and implement innovative microservice ideas for the platform.',
      'Gaining hands-on experience in building scalable solutions tailored to a pet-oriented user base',
      'Contributing to the technical growth of Woofurs through efficient coding practices and modern web development techniques.',
    ],
  },
 
 

  {
    title: 'Full stack Developer',
    company_name: 'LearnSmasher Edutech LLP',
    icon: learnsmasher,
    iconBg: '#fff',
    date: 'Jan 2023 - Present',
    points: [
      'Contributed to the development of interactive e-learning solutions, enhancing user engagement and accessibility.',
      'Assisted in building and optimizing web applications using modern technologies to improve platform performance..',
      'Collaborated with cross-functional teams to implement innovative features tailored for learners.',
      'Gained experience in designing user-friendly interfaces and managing backend processes efficiently.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: shopify,
    iconBg: '#383E56',
    points: [
      'Delivered end-to-end web development solutions for clients, specializing in React.js, Next.js, and MongoDB.',
      'Developed dynamic and responsive websites tailored to client requirements, ensuring high performance and usability..',
      'Successfully collaborated with brands like Coke Studio Bharat and Vantara on digital projects, showcasing adaptability and innovation.',
      'Enhanced client satisfaction by implementing modern web practices and maintaining timely project delivery.',
    ],
  },
];