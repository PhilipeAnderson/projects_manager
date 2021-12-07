import { ProjectForm } from '../../components/ProjectForm/ProjectForm';
import styles from './NewProject.module.css';
export function NewProject(){
    return (
        <div className={styles.container}>
            <h1>Insert a new project</h1>
            <p>Create a new project and add services to it</p>
            <ProjectForm whatHappen="Created Project"/>
        </div>
    )
}