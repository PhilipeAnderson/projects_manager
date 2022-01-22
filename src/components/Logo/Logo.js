import { Link } from 'react-router-dom';
import { Container } from './styles.js';
import logo from '../../assets/img/logo.png';

export function Logo() {
	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="Logo do Projeto" />
			</Link>
		</Container>
	)
}