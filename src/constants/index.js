import project1 from "../assets/projects/Wanderlust.png";
import project2 from "../assets/projects/Picksportz.png";
import project3 from "../assets/projects/Simon.png";


import webImage from '../assets/web.png';
import dsaImage from '../assets/dsa.png';
import dbmsImage from '../assets/dbms.png';

export const HERO_CONTENT = `I'm a full-stack developer with expertise in the MERN stack, database management, and scalable web applications. I specialize in building dynamic, user-friendly, and performance-driven applications, combining front-end creativity with back-end efficiency. With a passion for problem-solving and clean code, I strive to create seamless digital experiences. Explore my projects, skills, and experience as I continue to innovate and develop impactful digital solutions.`;

export const ABOUT_TEXT = ` I am a passionate full-stack developer specializing in the MERN stack, database management, and scalable web applications. With a knack for problem-solving and a commitment to clean code, I build dynamic, user-friendly, and performance-driven applications that deliver seamless digital experiences. My expertise lies in combining front-end creativity with back-end efficiency to create robust and scalable solutions. I thrive on challenges that push me to innovate and continuously improve my craft. Whether it’s optimizing databases, designing intuitive interfaces, or ensuring application performance, I strive to deliver impactful results. Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying ahead of industry trends. I believe in the power of collaboration and am always eager to take on projects that make a difference. Let’s connect and create something extraordinary together! 🚀`;

export const ACHIEVEMENTS = [
  {
    role: "Selected Participant",
    place: "SIH India",
    description: `Collaborated in a team to develop an app aimed at eliminating middlemen in the farming industry, ensuring better profits for both farmers and consumers. Contributed to defining project requirements, developing user-friendly interfaces, and integrating essential features to streamline the process.`,
  },
  {
    role: "WebScape Finalist",
    place: "COEP Pune",
    description: `Selected as a finalist in the Webscape hackathon organized by COEP Pune. Developed an impressive webpage on a given topic using web development languages. Focused on creating visually appealing and user-friendly interfaces under tight deadlines.`,
  },
  {
    role: "Tech Lead",
    place: "CODE Club",
    description: `Serve as the tech lead for the Code Club, the Club of Data Engineers. Organize and coordinate tech-related events, fostering a collaborative environment to enhance knowledge sharing and skill development among club members.`,
  },
  {

    role: "Class Reprentative",
    place: "First Year",
    description: `Serve as the class representative during the first year of engineering. Act as a liaison between students and faculty, ensuring effective communication and addressing any concerns or issues raised by classmates.`,
 
  },
];


export const CERTIFICATIONS = [
  {
    image: webImage,
    role: "MERN Stack Development",
    place: "Apna College",
    description: `Completed a MERN Stack development course from Apna College, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Worked on real-world projects, implemented RESTful APIs, and developed responsive user interfaces while improving problem-solving and debugging skills`,
  },
  {
    image: dsaImage,
    role: "DSA",
    place: "Love Babbar(Youtube)",
    description: `Completed a Data Structures and Algorithms (DSA) course from Love Babbar, strengthening problem-solving skills and mastering algorithms like sorting, searching, dynamic programming, and graph traversal. Practiced solving competitive programming problems and optimized code for efficiency.`,
  },
  {
    image: dbmsImage,
    role: "DBMS",
    place: "Love Babbar(Youtube)",
    description: `Completed a Database Management Systems (DBMS) course from Love Babbar and Lakshay Bhaiya, gaining in-depth knowledge of SQL, normalization, indexing, transactions, and database design. Worked on real-world database queries, optimized performance, and understood the fundamentals of relational and non-relational databases.`,
  },
  
];




export const PROJECTS = [
  {
    title: "Wanderlust - Hotel Booking Website ",
    image: project1,
    description:
      "A fully functional villa booking website with features like property listings, booking system, and user authentication. Allows users to find, book, and rent villas seamlessly while ensuring a smooth and secure transaction process.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB","Express.js"],
  },
  {
    title: "PickSportz - Turf Booking Website",
    image: project2,
    description:
      "A fully functional sports booking website with features like venue listings, booking system, and user authentication. Allows users to find and book sports venues seamlessly while ensuring a smooth and secure transaction process.",
    technologies: ["HTML", "CSS", "Javascript", "Mongodb",],
  },
  {
    title: "Simon Game",
    image: project3,
    description:
      "A fun and interactive Simon Game that tests memory skills by generating a sequence of colors and sounds. Players must recall and repeat the pattern as it gets progressively harder.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "Pune, Maharashtra - 410032 India ",
  phoneNo: "+12 4555 666 00 ",
  email: "jaipurkaromkar2305@gmail.com",
  linkedin: "https://www.linkedin.com/in/omkar-jaipurkar",
  github: "https://github.com/Omkarjaipurkar23",
};
