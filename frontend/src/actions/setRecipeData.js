import { ACTION_TYPE } from './actionTypes';

export const setRecipeData = (recipeData) => ({
	type: ACTION_TYPE.SET_RECIPE_DATA,
	payload: recipeData,
});
