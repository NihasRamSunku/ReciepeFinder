const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const router = express.Router();
const recipes = [];

// ✅ Load and parse PP_recipes.csv safely
fs.createReadStream(path.join(__dirname, '../data/RAW_recipes.csv'))
  .pipe(csv())
  .on('data', (row) => {
    // Check if required fields exist
    if (!row.id || !row.name || !row.ingredients) return;

    // Process ingredients field
    row.ingredients = row.ingredients
      .replace(/\[|\]|'|"/g, '')
      .split(',')
      .map(i => i.trim().toLowerCase());

    // Process steps field
    row.steps = row.steps
      ? row.steps.replace(/\[|\]|'|"/g, '').split(',').join(' ')
      : 'No instructions available.';

    recipes.push(row);
  })
  .on('end', () => {
    console.log(`✅ Loaded ${recipes.length} recipes from RAW_recipes.csv`);
  });

// 🔍 Search by ingredients
router.get('/search', (req, res) => {
  const query = (req.query.ingredients || '').toLowerCase().split(',').map(i => i.trim());
  const results = recipes.filter(recipe =>
    query.every(q => recipe.ingredients.includes(q))
  ).slice(0, 50); // Limit to 50 results
  res.json(results);
});

// 🔎 Get recipe details by ID
router.get('/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Recipe not found.' });
  }
});

module.exports = router;
