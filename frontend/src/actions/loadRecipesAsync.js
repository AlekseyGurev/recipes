import { setRecipesData } from './setRecipesData';

export const loadRecipesAsync = () => (dispatch) =>
	fetch(`https://dummyjson.com/recipes?limit=0`)
		.then((recipesData) => recipesData.json())
		.then((recipesData) => {
			dispatch(setRecipesData(recipesData));
		});
