import { Layout, Spin, Card, Space, Steps, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Header } from '../../components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRecipeAsync } from '../../actions';
import { useSelector } from 'react-redux';
import { selectRecipe } from '../../selectors';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './RecipePage.module.css';
import { CardTitle } from '../../components/ui';

export function RecipePage() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [recipeImageCount, setRecipeImageCount] = useState(0);
	const [isError, setIsError] = useState(false);
	const params = useParams();
	const navigate = useNavigate();
	const recipe = useSelector(selectRecipe);

	useEffect(() => {
		dispatch(loadRecipeAsync(params.id))
			.then(() => {
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
				setIsError(true);
			});
	}, [dispatch, params.id]);

	const mockImageArray = [
		`${recipe.image}`,
		'https://cdn.dummyjson.com/recipe-images/4.webp',
	];

	const onClickNextImageButton = () => {
		setRecipeImageCount(recipeImageCount + 1);
	};
	const onClickPrevImageButton = () => {
		setRecipeImageCount(recipeImageCount - 1);
	};

	if (isError) {
		navigate('/404');
	}

	return isLoading ? (
		<Spin fullscreen />
	) : (
		<Layout className={styles.container}>
			<Space direction="vertical" size="middle" className={styles.space}>
				<Header title={recipe.name}></Header>
				<div className={styles.containerContent}>
					<div className={styles.textCol}>
						<Card
							className={styles.cards}
							size="small"
							title={<CardTitle title={'Cuisine'} />}
						>
							<div className={styles.containerText}>
								<p className={styles.text}>{recipe.cuisine}</p>
							</div>
						</Card>
						<Card
							className={styles.cards}
							size="small"
							title={<CardTitle title={'Tags'} />}
						>
							<div className={styles.containerText}>
								{recipe.tags.map((tag) => (
									<span
										className={styles.tags}
										key={tag}
									>{`#${tag}`}</span>
								))}
							</div>
						</Card>
						<Card
							className={styles.cards}
							size="small"
							title={<CardTitle title={'Calories'} />}
						>
							<div className={styles.containerText}>
								<p className={styles.text}>
									{recipe.caloriesPerServing} ккал
								</p>
								<p className={styles.tags}>100 грамм</p>
							</div>
						</Card>
						<Card
							className={styles.cards}
							size="small"
							title={<CardTitle title={'Servings'} />}
						>
							<div className={styles.containerText}>
								<p className={styles.textLarge}>{recipe.servings}</p>
							</div>
						</Card>

						<Card
							className={`${styles.cards} ${styles.lastCard}`}
							size="small"
							title={<CardTitle title={'Description'} />}
						>
							<div className={styles.containerText}>
								<p className={styles.tags}>{recipe.ingredients}</p>
							</div>
						</Card>
					</div>
					<div className={styles.textCol}>
						<Card
							className={styles.cards}
							size="small"
							title={<CardTitle title={'Total cooking time'} />}
						>
							<div className={styles.containerText}>
								<p className={styles.text}>
									{recipe.cookTimeMinutes} minutes
								</p>
							</div>
						</Card>
						<Card
							className={`${styles.cards} ${styles.lastCard}`}
							size="small"
							title={<CardTitle title={'Cooking Instructions'} />}
						>
							<div className={styles.containerText}>
								<Steps
									progressDot
									current={recipe.instructions.length}
									direction="vertical"
									items={recipe.instructions.map((step) => ({
										title: step,
										status: 'process',
									}))}
								/>
							</div>
						</Card>
					</div>
					<div className={styles.imageCol}>
						{mockImageArray && (
							<img
								className={styles.image}
								src={`${mockImageArray[recipeImageCount]}`}
								width="918"
								height="760"
								alt="eat photo"
							/>
						)}
						<div className={styles.buttonContainer}>
							<Button
								disabled={recipeImageCount === 0 ? true : false}
								onClick={onClickPrevImageButton}
							>
								<LeftOutlined />
							</Button>
							<Button
								disabled={
									recipeImageCount === mockImageArray.length - 1
										? true
										: false
								}
								onClick={onClickNextImageButton}
							>
								<RightOutlined />
							</Button>
						</div>
					</div>
				</div>
			</Space>
		</Layout>
	);
}
