import { Layout, Spin } from 'antd';
import { Header, Sider, SearchContent } from '../../components';
import { useDispatch } from 'react-redux';
import { loadRecipesAsync } from '../../actions';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../../selectors';
import { useEffect, useState } from 'react';
import { DEFAULT_PAGE_SIZE, SELECTION_ALL, START_PAGE } from '../../constants/constants';
import { filter } from '../../utilities/filter';
import { getSelectFields } from '../../utilities/getSelectFields';
import styles from './MainPage.module.css';

export function MainPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(START_PAGE);
	const [dataRecipes, setDataRecipes] = useState([]);
	const [sortCuisine, setSortCuisine] = useState(SELECTION_ALL);
	const [sortDifficulty, setSortDifficulty] = useState(SELECTION_ALL);
	const [sortMealType, setSortMealType] = useState(SELECTION_ALL);
	const [allCuisines, setAllCuisines] = useState([]);
	const [allMealType, setAllMealType] = useState([]);
	const [allDifficulty, setAllDifficulty] = useState([]);
	const [isDisabled, setISdisabled] = useState(true);
	const [total, setTotal] = useState('');
	const { recipes } = useSelector(selectRecipes);
	const dispatch = useDispatch();
	const onChangePage = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		dispatch(loadRecipesAsync()).finally(() => setIsLoading(false));
	}, [dispatch]);

	useEffect(() => {
		const skip = currentPage * DEFAULT_PAGE_SIZE - DEFAULT_PAGE_SIZE;
		if (recipes) {
			setAllCuisines(getSelectFields(recipes, 'cuisine'));
			setAllMealType(getSelectFields(recipes, 'mealType'));
			setAllDifficulty(getSelectFields(recipes, 'difficulty'));

			const searchRecipe = filter(
				recipes,
				sortCuisine,
				sortDifficulty,
				sortMealType,
			);

			setTotal(searchRecipe.length);
			setDataRecipes(searchRecipe.slice(skip, skip + DEFAULT_PAGE_SIZE));
		}
	}, [currentPage, recipes, sortCuisine, sortDifficulty, sortMealType]);

	const onChangeSelectCuisine = (cuisine) => {
		setSortCuisine(cuisine);
		setISdisabled(false);
	};

	const onChangeSelectMealType = (mealType) => {
		setSortMealType(mealType);
		setISdisabled(false);
	};

	const onChangeSelectDifficulty = ({ target }) => {
		setSortDifficulty(target.value);
		setISdisabled(false);
	};

	const onClickResetSelectForm = () => {
		setSortDifficulty(SELECTION_ALL);
		setSortMealType(SELECTION_ALL);
		setSortCuisine(SELECTION_ALL);
		setISdisabled(true);
	};

	return isLoading ? (
		<Spin fullscreen />
	) : (
		<Layout className={styles.container}>
			<Header />
			<Layout>
				<Sider
					allCuisines={allCuisines}
					allMealType={allMealType}
					allDifficulty={allDifficulty}
					sortCuisine={sortCuisine}
					sortDifficulty={sortDifficulty}
					sortMealType={sortMealType}
					onChangeSelectCuisine={onChangeSelectCuisine}
					onChangeSelectMealType={onChangeSelectMealType}
					onChangeSelectDifficulty={onChangeSelectDifficulty}
					onClickResetSelectForm={onClickResetSelectForm}
					isDisabled={isDisabled}
				/>
				<SearchContent
					dataRecipes={dataRecipes}
					onChangePage={onChangePage}
					currentPage={currentPage}
					total={total}
				/>
			</Layout>
		</Layout>
	);
}
