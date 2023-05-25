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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  kubernates,
  postgresql,
  jenkins,
  sgl,
  pruthvi3d,
  restapi
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
    title: "Backend Developer",
    icon: backend,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Back End Developer",
    company_name: "Scanpoint Geomatics Limited",
    icon: sgl,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "I meticulously designed and developed a powerful Restful API leveraging the combined potential of Node.js, PostgreSQL, and Fastify. This API serves as a comprehensive solution for performing Geospatial operations on vector data, encompassing Line, Point, and Polygon layers. Notably, it enables essential functionalities such as Buffer analysis on Point layers, Intersection analysis between two Line layers, Dump analysis on Polygon layers, and a wide array of other Geometric and spatial operations. To ensure the reliability and accuracy of the API, I created robust unit test cases utilizing Chai and Mocha frameworks.",
      "To streamline the development process and ensure continuous integration, I established a reliable CI/CD pipeline through Jenkins. This implementation facilitated automated builds, seamless testing, and efficient deployment. Moreover, I containerized the API using Docker, enhancing its portability, scalability, and ease of deployment across various environments.",
      "For optimal performance and fault tolerance, I incorporated load balancing and self-healing capabilities via Kubernetes. This integration ensures efficient distribution of workloads and automatically addresses any system failures, contributing to a highly resilient infrastructure.",
      "This exceptional API plays a pivotal role in supporting the project management team by enabling the seamless display of vector data on diverse smart city portals. Moreover, it empowers users to perform spatial operations effortlessly, catering to the specific needs of managing and analyzing vector data within smart city environments.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Scanpoint Geomatics Limited",
    icon: sgl,
    iconBg: "#E6DEDD",
    date: "July 2021 - March 2022",
    points: [
      "Employing React and Next.js, I successfully developed a series of interactive widgets within the IGiS 3D platform. which also improved seo by using server side rendringThese widgets, namely the Chart widget, Time series analysis widget, and overview widget, offer invaluable functionalities to users.",
      "The Chart widget facilitates in-depth analysis of vector data through various graph types, such as Scatter Plot Matrix Graph, Bar graph, Tree map, and more. This versatile widget empowers users to gain comprehensive insights and visualize data in a meaningful way.",
      "The Time series analysis widget proves instrumental in displaying and comparing vector data at specific time intervals. By leveraging this widget, the GIS team can easily observe and comprehend variations in the vector data over time, enabling better decision-making and analysis.",
      "These widgets collectively serve as valuable tools for the GIS team, enabling them to explore a diverse range of analyses on vector data within the IGiS 3D environment. By utilizing these widgets, the team gains a deeper understanding of the data and enhances their ability to extract meaningful insights for efficient spatial analysis.",
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
      "Chat Application with Socket.io: Built a powerful server application using Node.js and Socket.io, enabling real-time communication between multiple users in a chat environment."
    ],
  }
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
    name: "IGiS Rest API",
    description:
      "IGiS Rest API is a geospatial application programming interface (API) that provides a range of powerful features for performing spatial operations on raster data.",
    tags: [
      {
        name: "nodejs",
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
  }
];

export { services, technologies, experiences, testimonials, projects };
