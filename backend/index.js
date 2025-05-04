const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
