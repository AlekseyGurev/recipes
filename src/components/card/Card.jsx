import { Stars } from '../ui/';
import styles from './Card.module.css';

export function Card({ recipe }) {
	return (
		<li className={styles.container}>
			<div className={styles.main}>
				<h3 className={styles.title}>{recipe.name}</h3>
				<img
					className={styles.image}
					src={recipe.image}
					alt="картинка"
					width="225"
					height="291"
				/>
			</div>
			<div className={styles.description}>
				<p className={styles.text}>{recipe.instructions}</p>
				<ul className={styles.tagsList}>
					{recipe.cookTimeMinutes === 0 ? null : (
						<li className={styles.tagsItem}>
							<span className={styles.cookTime}>
								{recipe.cookTimeMinutes} minutes
							</span>
						</li>
					)}
					<li className={styles.tagsItem}>
						<Stars difficulty={recipe.difficulty} />
					</li>
					<li className={styles.tagsItem}>{recipe.cuisine}</li>
					<li className={styles.tagsItem}>{recipe.mealType.join(', ')}</li>
				</ul>
			</div>
		</li>
	);
}
