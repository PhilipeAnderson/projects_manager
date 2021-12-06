import styles from './Button.module.css';


export function Button({ name }) {
	return (
		<button className={styles.button}>
			{name}
		</button>
	)
}