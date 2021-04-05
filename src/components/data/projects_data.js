import Youtube from '../../assets/projects_images/Youtube.JPG'
import Mastermind from '../../assets/projects_images/Mastermind.JPG'
import Login from '../../assets/projects_images/Login.JPG'
import Portfolio from '../../assets/projects_images/Portfolio.JPG'
import Effect from '../../assets/projects_images/3DEffect.JPG'

const data_projects = [
    {
        name: 'Youtube Clone',
        image: Youtube,
        deployed_url: 'https://utube-clone-using-react.web.app/',
        github_url: 'https://github.com/PakkiPavan/Youtube-clone-react-app',
        category: ['react.js','redux','firebase']
    },
    {
        name: 'Mastermind Game',
        image: Mastermind,
        deployed_url: 'https://mastermind-game.netlify.app/',
        github_url: 'https://github.com/PakkiPavan/MastermindGame',
        category: ['react.js']
    },
    {
        name: 'Portfolio',
        image: Portfolio,
        deployed_url: 'https://pavan-pakki.netlify.app/',
        github_url: 'https://github.com/PakkiPavan/Portfolio',
        category: ['react.js']
    },
    {
        name: 'Login/SignUp Forms',
        image: Login,
        deployed_url: 'https://login-signup-form.netlify.app/',
        github_url: 'https://github.com/PakkiPavan/Login-Signup-Forms',
        category: ['HTML','CSS','HTML/CSS']
    },
    {
        name: '3D Effect',
        image: Effect,
        deployed_url: 'https://3d-rotation.netlify.app/',
        github_url: 'https://github.com/PakkiPavan/3D-Effect',
        category: ['HTML','CSS','HTML/CSS']
    },
    {
        name: 'User Authentication',
        image: Login,
        deployed_url: 'https://mern-app-v1.herokuapp.com/',
        github_url: 'https://github.com/PakkiPavan/MERN-App',
        category: ['node.js', 'mongoDB', 'react.js','heroku']
    }
]

export default data_projects;