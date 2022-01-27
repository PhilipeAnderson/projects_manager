import { Link } from 'react-router-dom';
import { Container, MenuIcon} from './styles.js';

import { GiHamburgerMenu } from 'react-icons/gi';


export function NavBar() {
	return (
		<Container>
			<MenuIcon>
				<GiHamburgerMenu/>
			</MenuIcon>

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