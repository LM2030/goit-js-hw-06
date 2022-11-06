const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const newList = ingredients.map(ingredient => {
	const ingredientEl = document.createElement("li");
	ingredientEl.classList.add("item");
	ingredientEl.textContent = ingredient;
	return ingredientEl;
});

const addList = document.querySelector("ul#ingredients");
addList.append(...newList);
