document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const ingredients = document.getElementById('ingredient-input').value.trim();
  if (!ingredients) return alert("Please enter some ingredients.");

  const encoded = encodeURIComponent(ingredients);
  const url = `http://localhost:5000/api/recipes/search?ingredients=${encoded}`;

  try {
    const response = await fetch(url);
    const recipes = await response.json();
    displayRecipes(recipes);
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Failed to load recipes.");
  }
});

function displayRecipes(recipes) {
  const container = document.getElementById('results');
  container.innerHTML = '';

  if (!recipes || recipes.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <a href="details.html?id=${recipe.id}">View Details</a>
    `;
    container.appendChild(card);
  });
}
