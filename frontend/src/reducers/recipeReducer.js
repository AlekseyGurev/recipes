import { ACTION_TYPE } from '../actions';

const initialRecipesState = [];

export const recipeReducer = (state = initialRecipesState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_RECIPE_DATA:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
