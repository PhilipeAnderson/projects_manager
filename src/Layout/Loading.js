import loading from '../assets/img/loading.gif';
import styles from './Loading.module.css';


export function Loading() {
  return(
    <div className={ styles.loader_container }>
      <img className={ styles.loader }src={ loading } alt="Loading" />
    </div>
  )  
}