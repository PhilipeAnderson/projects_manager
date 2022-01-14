import { useNavigate } from 'react-router-dom';

import { ProjectForm } from '../../components/ProjectForm/ProjectForm';
import styles from './NewProject.module.css';

export function NewProject(){

    const navigate = useNavigate();

    function createPost(project){

        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project) 
        }).then(resp => resp.json())
          .then(data => {
              console.log(data)
              navigate('/projects', { message: 'Projeto criado com sucesso!' })
          })
          .catch(err => console.log(err))  
    }


    return (
        <div className={styles.container}>
            <h1>Insert a new project</h1>
            <p>Create a new project and add services to it</p>
            <ProjectForm handleSubmit={ createPost } whatHappen="Created Project"/>
        </div>
    )
}