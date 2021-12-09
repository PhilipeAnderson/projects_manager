import { useLocation } from 'react-router-dom';
import { Message } from '../../Layout/Message';
import styles from './Projects.module.css';


export function Projects(){

const location = useLocation()
let message = ''
if(location.state){
  message = location.state.message
}

  return(
    <div className={styles.projects}>
      <h1>My Projects</h1>
      {message && <Message msg={message} type="success"/>}
    </div>
  )
}