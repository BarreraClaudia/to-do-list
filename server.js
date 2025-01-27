const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const connectDB = require('./config/database');

const mainRoutes = require('./routes/main');
const todoRoutes = require('./routes/todo');

require('dotenv').config({ path: './config/.env' });

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use('/', mainRoutes);
app.use('/todo', todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening... ٩(｡•́‿•̀｡)۶`);
});
