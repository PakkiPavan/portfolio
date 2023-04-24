import {
    FaLaptopCode,
    FaDatabase,
    FaFileCode,
    FaJs,
    FaGitAlt,
    FaUsers
} from "react-icons/fa";

const skills = [
    {
        icon: FaLaptopCode,
        iconSize: 40,
        title: [<strong>Frontend Development</strong>],
        // about: ["I can build a beautiful and scalable Single Page Applications using", <strong key={1}> HTML, CSS and React.js </strong>]
        about: "I can build a beautiful and scalable Single Page Applications using HTML, CSS and React.js"
    },
    {
        icon: FaJs,
        iconSize: 30,
        title: [<strong>Backend  Development</strong>],
        // about: ["I can handle API in server side using", <strong key={1}> Node.js, Express.js </strong>],
        about: "I can handle API in server side using Node.js, Express.js"
    },
    {
        icon: FaDatabase,
        iconSize: 30,
        title: [<strong>Database</strong>],
        // about: ["I can handle data using", <strong key={1}> SQL, MongoDB </strong>],
        about: "I can handle data using SQL, MongoDB"
    },
    {
        icon: FaGitAlt,
        iconSize: 30,
        title: [<strong>Version Control</strong>],
        // about: ["I can handle the source code using", <strong key={1}> Git </strong>],
        about: "I can handle the source code using Git"
    },
    {
        icon: FaUsers,
        iconSize: 35,
        title: [<strong>Hosting</strong>],
        // about: ["I can deploy the web pages using", <strong key={1}> Heroku, Netlify and Firebase </strong>],
        about: "I can deploy the web pages using Heroku, Netlify and Firebase"
    },
    {
        icon: FaFileCode,
        iconSize: 30,
        title: [<strong>Competitive Coder</strong>],
        // about: ["Frequent problem solver in",<strong key={1}>  HackerRank, Codeforces and Leetcode </strong>, "platforms"]
        about: "Frequent problem solver in HackerRank, Codeforces and Leetcode platforms"
    }
];
export default skills;