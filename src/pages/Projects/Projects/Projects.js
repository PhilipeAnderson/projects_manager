import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectCard } from './../ProjectCard/ProjectCard';
import { Message } from '../../../Layout/Message';
import { Loading } from '../../../Layout/Loading/Loading';
import { Button } from '../../../components/Button/Button';

import { ContainerProjects } from './styles.js';

  export function Projects() {

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch(err => console.log(err))
    }, 1300)
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }, 
    }).then(response => response.json())
      .then(data => {
        setProjects(projects.filter(project => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      }).catch(err => console.log(err))
  }

  return (
    <ContainerProjects>
      <header>
        <h1>My Projects</h1>
        <Button to="/newProject" name="Create Project" />
      </header>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <main customClass="start">
        {projects.length > 0 && projects.map(project => {
          return(
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          )
        })}
      </main>

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
    </ContainerProjects>
  )
}