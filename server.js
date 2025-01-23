const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const todoRoutes = require('./routes/todo');

const port = process.env.PORT || 3000;

require('dotenv').config({ path: './config/.env' });

connectDB();

// ========================
// Middlewares
// ========================
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRoutes);
app.use('/todo', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
