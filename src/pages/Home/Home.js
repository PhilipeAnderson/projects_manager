import styles from './Home.module.css'
import DrawImage from '../../assets/img/drawImage.png'
import { Button } from '../../components/Button/Button'

export function Home() {
	return (
		<main className={styles.main}>
			<h1>it's time to start !</h1>
			<div className={styles.content}>
				<img src={DrawImage} alt="Desenho de Capa" />
				<div className={styles.text}>
					<p>
						Crie, Acesse e Compartilhe
					</p>
					<p>
						seus projetos com a equipe!
					</p>
					<p>
						É fácil é rápido!
					</p>
				</div>
			</div>
			<Button name="Create Project" />
		</main>
	)
}

