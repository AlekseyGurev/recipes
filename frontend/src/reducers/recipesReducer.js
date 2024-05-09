import { ACTION_TYPE } from '../actions';

const initialRecipeState = [];

export const recipesReducer = (state = initialRecipeState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_RECIPES_DATA:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
