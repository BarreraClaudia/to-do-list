const Todo = require('../models/Todo');

module.exports = {
  getTodo: async (req, res) => {
    res.render('todo.ejs', {});
    // console.log(`user is... ${req.user}`);
    // try {
    //   const todoItems = await Todo.find({ userId: req.user.id });
    //   // const itemsLeft = await Todo.countDocuments({
    //   //   userId: req.user.id,
    //   //   completed: false,
    //   // });
    //   res.render('todo.ejs', {
    //     todo: todoItems,
    //     // left: itemsLeft,
    //     // user: req.user,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  },
  createTodo: async (req, res) => {
    console.log('To do item added');
    console.log(`req body is... ${req.body}`);

    // try {
    //   await Todo.create({
    //     todo: req.body.todoItem,
    //     completed: false,
    //     // userId: req.user.id,
    //   });
    //   console.log('Todo has been added!');
    //   res.redirect('/todo');
    // } catch (err) {
    //   console.log(err);
    // }
  },
};
