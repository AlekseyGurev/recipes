import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { recipesReducer, recipeReducer } from './reducers';

const reducer = combineReducers({
	recipes: recipesReducer,
	recipe: recipeReducer,
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnchancers(applyMiddleware(thunk)));
