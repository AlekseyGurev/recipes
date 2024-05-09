import styles from './CardTitle.module.css';

export function CardTitle({ title }) {
	return <h3 className={styles.title}> {title}</h3>;
}
