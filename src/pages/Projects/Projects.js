import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { Container } from '../../Layout/Container';
import { Message } from '../../Layout/Message';
import { Button } from '../../components/Button/Button';

import styles from './Projects.module.css';

  export function Projects() {

  const [projects, setProjects] = useState([]);

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProjects(data)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.projects_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <Button to="/newProject" name="Create Project" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 && projects.map(project => {
          return(
            <ProjectCard name={project.name}/>
          )
        })}
      </Container>
    </div>
  )
}