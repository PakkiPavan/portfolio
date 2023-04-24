import { 
	FaJs,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaCode
} from "react-icons/fa";
import { 
    DiEclipse,
    DiGithubBadge
 } from "react-icons/di";

const languages=[
    {
        icon:FaJs,
        iconSize:20,
        name:"JavaScript",
        level:"60"
    },
    {
        icon:FaReact,
        iconSize:20,
        name:"React JS",
        level:"70"
    },
    {
        icon:FaHtml5,
        iconSize:20,
        name:"HTML",
        level:"80"
    },
    {
        icon:FaCss3Alt,
        iconSize:20,
        name:"CSS",
        level:"60"
    },
    {
        icon:FaNodeJs,
        iconSize:20,
        name:"Node JS",
        level:"70"
    },
    {
        icon:FaNodeJs,
        iconSize:20,
        name:"Express JS",
        level:"80"
    }
];

const tools=[
    {
        icon:FaCode,
        iconSize:20,
        name:"VS Code",
        level:"80"
    },
    {
        icon:DiEclipse,
        iconSize:23,
        name:"Eclipse",
        level:"60"
    },
    {
        icon:DiGithubBadge,
        iconSize:23,
        name:"Git",
        level:"80"
    }
];

export {tools,languages};