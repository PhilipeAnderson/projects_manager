import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

import logo from '../../assets/img/logo.png';

export function Logo() {
	return (
		<div className={styles.logo}>
			<Link to="/">
				<img src={logo} alt="Logo do Projeto" />
			</Link>
		</div>
	)
}