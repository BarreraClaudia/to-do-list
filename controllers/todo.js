module.exports = {
  getTodo: (req, res) => {
    res.render('todo.ejs', {});
  },
  createTodo: (req, res) => {
    console.log('To do item added');
    console.log(req.body);
  },
};
