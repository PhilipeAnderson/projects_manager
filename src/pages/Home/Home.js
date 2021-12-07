import styles from './Home.module.css'
import DrawImage from '../../assets/img/drawImage.png'
import { Button } from '../../components/Button/Button'

export function Home() {
	return (
		<main className={styles.main}>
			<h1>Create your first project</h1>
			<p>
			Create, Access and Share your projects with the team!
			It's easy it's fast!
			</p>
			
			<Button name="Create Project" />
					
			<div className={styles.content}>
				<img src={DrawImage} alt="Desenho de Capa" />
			</div>
		</main>
	)
}

