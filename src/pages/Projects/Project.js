import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../Layout/Loading/Loading';
import { Container } from '../../Layout/Container';
import { ProjectForm} from '../../components/ProjectForm/ProjectForm';

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
    }, 1300)
  }, [id])

  function toogleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function handleEditForm(project) {
    
  }

  return(
    <>
      {project.name ? (
        <div className={styles.projectContainer}>
          <Container customClass="column">
            <div>
              <div className={styles.projectDetails}>
                <h1>Project:</h1>
                <button
                  onClick={toogleProjectForm}
                >
                  {!showProjectForm ? "Editar Projeto" : "Fechar Projeto"}
                </button>
              </div>
              {!showProjectForm ? (
                <div className={styles.details}>
                  <h2>Name: {project.name}</h2>
                  <h3>Category: {project.category.name}</h3>
                  <h3>Budget: $: {project.budget},00</h3>
                  <h3>Cost: $: {project.cost},00</h3>
                  <h3>Services: {project.services} ***</h3>
                </div>
              ) : (
                <div className={styles.projectForm}>
                  <ProjectForm handleSubmit={handleEditForm} projectData={project} whatHappen="Salvar Edição"/>
                </div>  
              )}
            </div>
          </Container>
        </div> 
      ) : (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </>
  )
}