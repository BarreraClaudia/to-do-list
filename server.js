const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');
const port = process.env.PORT || 3000;

// ========================
// Middlewares
// ========================
app.set('view engine', 'ejs');

app.use('/todo', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
