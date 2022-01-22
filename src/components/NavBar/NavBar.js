import { Link } from 'react-router-dom';
import { Container } from './styles.js';

export function NavBar() {
	return (
		<Container>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/newproject">New Project</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>
		</Container>
	)
}