export const filter = (recipes, sortCuisine, sortDifficulty, sortMealType) => {
	const searchRecipe = recipes.filter((recipe) => {
		return (
			(sortCuisine === 'All' ? true : recipe.cuisine === sortCuisine) &&
			(sortDifficulty === 'All' ? true : recipe.difficulty === sortDifficulty) &&
			(sortMealType === 'All' ? true : recipe.mealType.includes(sortMealType))
		);
	});

	return searchRecipe;
};
