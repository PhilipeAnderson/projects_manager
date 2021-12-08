// import { useHistory } from 'react-router-dom';

import { ProjectForm } from '../../components/ProjectForm/ProjectForm';
import styles from './NewProject.module.css';



export function NewProject(){

    //const history = useHistory();

    function createPost(project){

        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Copntent-Type': 'application/json'
            },
            body: JSON.stringify(project) 
        }).then(resp => resp.json())
          .then(data => {
              console.log(data)
          })
          .catch(err => console.log(err))  
    }


    return (
        <div className={styles.container}>
            <h1>Insert a new project</h1>
            <p>Create a new project and add services to it</p>
            <ProjectForm handleSubmit={createPost} whatHappen="Created Project"/>
        </div>
    )
}