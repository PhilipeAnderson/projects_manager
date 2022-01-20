import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

export function NavBar() {
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link className={styles.link} to="/">Home</Link>
				</li>
				<li>
					<Link className={styles.link} to="/newproject">New Project</Link>
				</li>
				<li>
					<Link className={styles.link} to="/projects">Projects</Link>
				</li>
				<li>
					<Link className={styles.link} to="/contact">Contact</Link>
				</li>



			</ul>
		</nav>
	)
}