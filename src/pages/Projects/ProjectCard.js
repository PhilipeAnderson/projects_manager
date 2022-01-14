import styles from './ProjectCard.module.css';
//import { BsPencil, BsFillTrashFill } from 'react.icons/bs';

export function ProjectCard({ id, name, budget, category, handleRemove}) {
  return(
    <div className={styles.projectCard}>
      <h4>{ name }</h4>
      <p>
        <span>Orçamento</span> R$:{ budget }
      </p>
      <p className={styles.categoryText}>
        <span></span> { category }
      </p>
      <div>
        <p>Editar</p>
        <p>Remover</p>
      </div>
    </div>
  )
}