import { useLocation } from 'react-router-dom';
import { Message } from '../../Layout/Message';
import { Container } from '../../Layout/Container';
import { Button } from '../../components/Button/Button'

import styles from './Projects.module.css';

export function Projects(){

const location = useLocation()
let message = ''
if(location.state){
  message = location.state.message
}

  return(
    <div className={styles.projects_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <Button to="/newProject" name="Create Project" />
      </div>
      {message && <Message msg={message} type="success"/>}
      <Container customClass="start">
        <p>projetos</p>
      </Container>
    </div>
  )
}