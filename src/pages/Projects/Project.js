import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../Layout/Loading';
import { Container } from '../../Layout/Container';
import { ProjectCard } from './ProjectCard';
// import { ProjectForm} from './ProjectForm';

import styles from './Project.module.css';


export function Project(){
  
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setProject(data))
      .catch(err => console.log(err))
    }, 1000)
  }, [id])

  function toogleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  return(
    <>
      {project.name ? (
        <div>
          <Container customClass="column">
            <div>
              <h1>Projeto: {project.name}</h1>
              <button 
                onClick={toogleProjectForm}
              >
                {!showProjectForm ? "Editar Projeto" : "Fechar Projeto"}
              </button>
              {!showProjectForm ? (
                <div>
                  <ProjectCard 
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                  />
                </div>
              ) : (
                <div>
                  <p>Detalhes do Projeto</p>
                </div>  
              )}
            </div>
          </Container>
        </div> 
      ) : (
        <Loading />
      )}
    </>
  )
}