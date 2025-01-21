const express = require('express');
const app = express();
const todoRoutes = require('./src/routes/todo');
const port = process.env.PORT || 3000;

app.use('/todo', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
