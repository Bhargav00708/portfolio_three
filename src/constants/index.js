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
  nodejs,
  mongodb,
  git,
  docker,
  kubernates,
  postgresql,
  jenkins,
  openxcell,
  sgl,
  pruthvi3d,
  restapi,
  speed,
  mysql
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front end Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernates",
    icon: kubernates,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
];

const experiences = [
  {
    title: "Back End Developer",
    company_name: "OpenXcell Technolabs",
    icon: openxcell,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Worked on optimizing critical send-related microservices, including withdrawal, payout, LNURL, and OneQR services, using Node.js, MySQL, and RxJS. These optimizations improved API response times and enhanced system scalability.",
      "Integrated Cybrid, a payment orchestration tool, enabling seamless fiat-to-crypto and crypto-to-fiat transactions. Utilized RxJS for reactive programming to handle event-driven operations efficiently.",
      "Designed and implemented a reusable NPM package, SpeedNodeJSCommon, to standardize utilities and configurations across services, reducing code duplication and boosting development efficiency.",
      "Developed a dedicated admin service to provide real-time insights into admin-related data, enhancing operational monitoring and management capabilities.",
      "Handled large-scale distributed transactions using asynchronous processes and the Saga pattern, ensuring fault tolerance and data consistency across microservices.",
      "Incorporated Apache Kafka for real-time event streaming, improving the system's ability to handle high transaction volumes while ensuring reliability.",
    ],
  },  
  {
    title: "Full Stack Developer",
    company_name: "Scanpoint Geomatics Limited",
    icon: sgl,
    iconBg: "#E6DEDD",
    date: "July 2021 - August 2023",
    points: [
      "Designed and developed a powerful RESTful API using Node.js, PostgreSQL, and Fastify, enabling advanced geospatial operations on vector data, including functionalities like Buffer analysis on Point layers, Intersection analysis between Line layers, and Dump analysis on Polygon layers. Ensured reliability by writing unit test cases with Chai and Mocha frameworks.",
      "Established a CI/CD pipeline using Jenkins for automated builds, testing, and deployments. Containerized the API with Docker for scalability and deployed it in Kubernetes, incorporating load balancing and self-healing capabilities for fault tolerance.",
      "Developed interactive widgets for the IGiS 3D platform using React and Next.js, improving SEO through server-side rendering. Key widgets include the Chart widget for data visualization, Time Series Analysis widget for temporal data comparison, and Overview widget for enhanced insights.",
      "The Chart widget supports various graph types, such as Scatter Plot Matrix, Bar Graphs, and Tree Maps, enabling comprehensive vector data analysis. The Time Series Analysis widget allows users to observe changes in vector data over time for informed decision-making.",
      "Played a crucial role in enhancing the IGiS 3D platform by enabling seamless geospatial data visualization and empowering GIS teams to perform advanced spatial analyses, improving overall efficiency and usability for smart city initiatives.",
    ],
  },  
  {
    title: "Internship",
    company_name: "Scanpoint Geomatics Limited",
    icon: sgl,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - July 2021",
    points: [
      "Chess Game: Developed a real-time chess game using HTML, CSS, and JavaScript, providing users with an interactive gaming experience.",
      "Ludo Game: Created a multiplayer Ludo game using HTML, CSS, and JavaScript, allowing multiple players to compete against each other online.",
      "Restaurant Bill Payment System: Designed and implemented a web-based application using HTML, CSS, and JavaScript, enabling customers to conveniently pay their bills online.",
      "Image Analysis Server: Developed a server application using Node.js, implementing image processing algorithms to enhance large raster images. Users can submit images and receive the enhanced output for further use.",
      "Chat Application with Socket.io: Built a powerful server application using Node.js and Socket.io, enabling real-time communication between multiple users in a chat environment.",
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
    name: "Speed",
    description:
      "Speed is a crypto-based fintech platform designed to handle millions of transactions daily, ensuring secure, fast, and scalable financial operations.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: speed,
    source_code_link: "https://app.tryspeed.com/dashboard",
  },
  {
    name: "IGiS Rest API",
    description:
      "IGiS Rest API is a geospatial application programming interface (API) that provides a range of powerful features for performing spatial operations on raster data.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "fastify",
        color: "pink-text-gradient",
      },
    ],
    image: restapi,
    source_code_link: "https://intsrv.sgligis.com:8443/RestAPI/",
  },
  {
    name: "IGiS Pruthvi 3D",
    description:
      "IGiS Pruthvi 3D is a Software as a Service (SaaS) platform that empowers users to effectively perform geospatial operations on raster and vector data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: pruthvi3d,
    source_code_link: "https://developer.sgligis.com/sgl_3d/theme/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
