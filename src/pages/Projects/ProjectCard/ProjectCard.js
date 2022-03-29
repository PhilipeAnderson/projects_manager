import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

import styles from './ProjectCard.module.css';
import { Container } from './styles';

export function ProjectCard({ id, name, budget, category, handleRemove}) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return(
    <Container >
      <h4>{ name }</h4>
      <div>
        <p>
          <span>Orçamento</span> R$:{ budget }
        </p>
        <p className={styles.categoryText}>
          <span className={`${styles[category.toLowerCase()]}`}></span> { category }
        </p>
      </div>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> 
          Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </Container >
  )
}