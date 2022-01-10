import {
  FiMail,
  FiGithub,
  FiLinkedin
} from 'react-icons/Fi';
import myImg from './me.jpg';
import './style.css';

function Project({ name, description, link }) {
  return (
    <div className="project">
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">link</a>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill">
      {skill}
    </div>
  );
}


function TimeLineItem({ time, content, index }) {
  return (
    <div className={`item ${index % 2 == 0 ? 'right' : 'left'}`}>
      <div className="content">
        <h4>{time}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

const projects = [
  {
    name: 'winRahi',
    description: 'a school project which is a mobile and web application to track cars\' positions in real time. Mobile app is built with Kotlin and web app is built with React and Firebase ',
    link: '#'
  },
  {
    name: 'devFest 2021 website',
    description: 'a website for devFest 2021 which is an annual event organized by GDG Algiers Club built with React and Gatsby',
    link: 'https://devfest21.gdgalgiers.com/'
  },
  {
    name: 'IWD 2021 website',
    description: 'a website for International Women Day 2021 which is an annuel event organised by GDG Algiers and Women Tech Makers Algiers clubs built with React and Gatsby',
    link: 'https://www.iwd21.wtmalgiers.org/'
  },
  {
    name: 'Shorty',
    description: 'A link shortener built with MERN stack. This is just another personal project built to apply what I learnt.',
    link: 'https://shorty-b.herokuapp.com/'
  },
  {
    name: 'todo app',
    description: 'Just another simple todo app built with Express.js and vanilla JavaScript. It is built only for learning purpose.',
    link: 'https://shrouded-dawn-15410.herokuapp.com/'
  }
];


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Bootstrap',
  'TailwindCSS',
];

const experience = [
  {
    time: 'December 2021',
    content: 'developpement member at School of AI Algiers club'
  },
  {
    time: 'November 2021',
    content: 'participant at DevFest 2021'
  },
  {
    time: 'Mai 2021',
    content: 'contribution on building WinRahi app for a school project'
  },
  {
    time: 'December 2020',
    content: 'developpement member at GDG Algiers club'
  },
  {
    time: 'October 2019',
    content: 'Design memeber at CSE club'
  },
  {
    time: 'Sepetember 2019',
    content: 'student at ESI Algiers'
  }
];

export default function App() {

  return (
    <div>
      <nav className="navbar">
      </nav>

      <section className="home">
        <div className="content">
          <h1>Hello!<br />
            I&apos;m Mohamed Islam Boumendjel<br />
            <small>a web developer</small>
          </h1>

          <div className="socials">
            <a href="mailto:jm_boumendjel@esi.dz" className="icon">
              <FiMail />
            </a>

            <a href="https://www.github.com/islam36" target="_blank" rel="noreferrer" className="icon">
              <FiGithub />
            </a>

            <a href="http://www.linkedin.com/in/med-islam-boumendjel" target="_blank" rel="noreferrer" className="icon">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="image">
          <img src={myImg} alt="Mohamed Islam Boumendjel" />
        </div>
      </section>

      <section className="projects">
        <h1>projects</h1>
        <div className="projects-container">
          {
            projects.map((project, index) => (
              <Project
              key={`${index}-${new Date().valueOf()}`}
                {...project}
              />
            ))
          }
        </div>
      </section>

      <section className="skills">
          <h1>skills</h1>

          <div className="container">
            {
              skills.map((skill, index) => (
                <Skill
                  key={`${index}-${new Date().valueOf()}`}
                  skill={skill}
                />
              ))
            }
          </div>
      </section>

      <section className="experience">
            <h1>experience</h1>
            <div className="timeline">
              {
                experience.map((item, index) => (
                  <TimeLineItem
                    key={`${index}-${new Date().valueOf()}`}
                    {...item}
                    index={index}
                  />
                ))
              }
            </div>
      </section>

    </div>
  )
}
