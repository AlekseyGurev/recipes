import { setRecipeData } from './setRecipeData';

export const loadRecipeAsync = (id) => (dispatch) =>
	fetch(`https://dummyjson.com/recipe/${id}`)
		.then((recipeData) => recipeData.json())
		.then((recipeData) => {
			dispatch(setRecipeData(recipeData));
		});
