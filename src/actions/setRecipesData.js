import { ACTION_TYPE } from './actionTypes';

export const setRecipesData = (recipesData) => ({
	type: ACTION_TYPE.SET_RECIPES_DATA,
	payload: recipesData,
});
