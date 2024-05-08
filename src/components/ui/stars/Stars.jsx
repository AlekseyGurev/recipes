import styles from './Stars.module.css';

export function Stars({ difficulty }) {
	return (
		<div className={styles.container}>
			Difficulty:
			<div
				className={`${styles.stars} ${styles[`${difficulty.toLowerCase()}`]}`}
			></div>
		</div>
	);
}
