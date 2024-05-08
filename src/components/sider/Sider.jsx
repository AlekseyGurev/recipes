import { Layout, Radio, Select, Button, Divider } from 'antd';
import styles from './Sider.module.css';
import { useNavigate } from 'react-router-dom';
import { selectRecipes } from '../../selectors';
import { useSelector } from 'react-redux';

export function Sider({
	allMealType,
	allCuisines,
	allDifficulty,
	sortMealType,
	sortDifficulty,
	sortCuisine,
	onChangeSelectCuisine,
	onChangeSelectMealType,
	onChangeSelectDifficulty,
	onClickResetSelectForm,
	isDisabled,
}) {
	const navigate = useNavigate();
	const { recipes } = useSelector(selectRecipes);
	return (
		<Layout.Sider className={styles.container} width="25%">
			<div className={styles.description}>
				<img
					src="../../../src/assets/img/mainImage.webp"
					width="369"
					height="160"
					alt="картинка"
				/>
				<ul className={styles.descriptionList}>
					<li className={styles.descriptionItem}>
						<p className={styles.descriptionText}>
							In our lives, as time becomes an increasingly valuable
							resource, the task of meal planning becomes increasingly
							difficult.
						</p>
					</li>
					<li className={styles.descriptionItem}>
						<p className={styles.descriptionText}>
							We often face a dilemma: what to cook for breakfast, lunch or
							dinner? How can we easily and quickly decide on the choice of
							dish and not spend a lot of time making this decision?
						</p>
					</li>
					<li className={styles.descriptionItem}>
						<p className={styles.descriptionText}>
							Our service will help: choose the parameters - and go!
						</p>
					</li>
				</ul>
				<Divider />
				{recipes ? (
					<>
						<form>
							<fieldset className={styles.containerSelects}>
								<label className={styles.label}>
									<span className={styles.labelText}>Cuisine:</span>
									<Select
										className={styles.select}
										value={sortCuisine}
										onChange={onChangeSelectCuisine}
										options={allCuisines.map((cuisine) => ({
											label: cuisine,
											value: cuisine,
										}))}
									/>
								</label>
								<label className={styles.label}>
									<span className={styles.labelText}>Meal type:</span>
									<Select
										className={styles.select}
										value={sortMealType}
										onSelect={onChangeSelectMealType}
										options={allMealType.map((mealType) => ({
											label: mealType,
											value: mealType,
										}))}
									/>
								</label>
								<label className={styles.label}>
									<span className={styles.labelText}>
										Difficulty of cooking:
									</span>
									<Radio.Group
										value={sortDifficulty}
										onChange={onChangeSelectDifficulty}
										className={styles.select}
									>
										{allDifficulty.map((difficulty) => (
											<Radio.Button
												value={difficulty}
												key={difficulty}
											>
												{difficulty}
											</Radio.Button>
										))}
									</Radio.Group>
								</label>
							</fieldset>
							<Button
								disabled={isDisabled}
								type="link"
								onClick={onClickResetSelectForm}
								className={styles.resetButton}
							>
								Reset all filters
							</Button>
						</form>
						<Divider />

						<div>
							<p className={styles.textGoodLuck}>You can also taste luck</p>
							<Button
								onClick={() => {
									navigate(
										`/recipe/${recipes[Math.floor(Math.random() * recipes.length)].id}`,
									);
								}}
							>
								I'll be lucky!
							</Button>
						</div>
					</>
				) : null}
			</div>
		</Layout.Sider>
	);
}
