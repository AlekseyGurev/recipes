export const getSelectFields = (recipes, field) => {
	const result = new Set();
	recipes.forEach((recipe) => {
		result.add('All');
		Array.isArray(recipe[field])
			? recipe[field].forEach((field) => {
					result.add(field);
				})
			: result.add(recipe[field]);
	});
	return Array.from(result);
};
