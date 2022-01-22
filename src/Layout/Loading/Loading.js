import loading from '../../assets/img/loading.gif';
import { LoadingWait } from './styles.js';


export function Loading() {
  return(
    <LoadingWait>
      <img src={ loading } alt="Loading" />
    </LoadingWait>
  )  
}