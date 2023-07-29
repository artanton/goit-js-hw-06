const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerIngredients = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

containerIngredients.append(...ingredientsItems);
