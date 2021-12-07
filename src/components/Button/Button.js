import { Link } from 'react-router-dom';
import styles from './Button.module.css';


export function Button({ to, name }) {
	return (
		<Link className={styles.button} to={to}>
			{ name }
		</Link>
	)
}