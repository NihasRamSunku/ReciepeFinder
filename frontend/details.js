const id = new URLSearchParams(window.location.search).get('id');
const container = document.getElementById('details');

if (!id) {
  container.innerHTML = '<p>Invalid recipe ID.</p>';
} else {
  fetch(`http://localhost:5000/api/recipes/${id}`)
    .then(res => res.json())
    .then(data => {
      if (!data || !data.name) {
        container.innerHTML = '<p>Recipe not found.</p>';
        return;
      }

      // Function to intelligently split instructions
      const splitInstructions = (instructions) => {
        // First try splitting by common conjunctions
        let steps = instructions.split(/(?:\band\b|\bthen\b|\bor\b|\b\w+ly\b)/i);
        
        // If that didn't work well, try splitting by punctuation
        if (steps.length <= 1) {
          steps = instructions.split(/(?<=[.!?])\s+/);
        }
        
        // Clean up each step
        return steps
          .map(step => step.trim())
          .filter(step => step.length > 0)
          .map(step => {
            // Capitalize first letter
            step = step.charAt(0).toUpperCase() + step.slice(1);
            // Remove trailing punctuation
            return step.replace(/[,.!?]+$/, '');
          });
      };

      // Process instructions
      const steps = Array.isArray(data.steps) 
        ? data.steps 
        : splitInstructions(data.steps);

      container.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Prep Time:</strong> ${data.minutes} minutes</p>
        
        <h3>Ingredients:</h3>
        <ul class="ingredients">
          ${data.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        
        <h3>Instructions:</h3>
        <ol class="instructions">
          ${steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <a href="index.html" class="back-link">← Back to recipes</a>
        
        <style>
          .ingredients, .instructions {
            padding-left: 20px;
          }
          .ingredients {
            list-style-type: circle;
            margin-bottom: 20px;
          }
          .instructions li {
            margin-bottom: 10px;
            line-height: 1.5;
          }
        </style>
      `;
    })
    .catch(err => {
      container.innerHTML = '<p>Error loading recipe details.</p>';
      console.error('Fetch error:', err);
    });
}