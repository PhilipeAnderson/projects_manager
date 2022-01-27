import { Button } from '../../components/Button/Button';
import { MainStyles } from './styles.js';
import DrawImage from '../../assets/img/drawImage.png';

export function Home() {
	return (
		<>
		<MainStyles>
			<h1>Create your first project</h1>
			<p>
				Create, Access and Share your projects with the team!
				It's easy it's fast!
			</p>

			<Button to="/newProject" name="Create Project" />
			
			<img src={DrawImage} alt="Desenho de Capa" />
			
		</MainStyles>
		</>
	)
}

