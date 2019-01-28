const fs = require('fs');

let listTodo = [];

const list = () => {
  loadJson();

  return (listTodo);
};

const create = description => {
  loadJson();

  const todo = {
    description,
    complete: false
  };

  listTodo.push(todo);

  return todo;
};

const store = () => {
  const data = JSON.stringify(listTodo);
  fs.writeFile('db/data.json', data, (err) => {
    if
      (err) throw new Error('No se pudo guardar la información', err);
  });
};

const update = (description, complete = true) => {
  loadJson();

  let index = listTodo.findIndex(task => description === task.description);
  if (index === -1) {
    return false;
  }

  listTodo[index].complete = complete;
  store();

  return true;
};

const remove = description => {
  loadJson();

  let index = listTodo.findIndex(task => description === task.description);
  if (index === -1) {
    return false;
  }

  listTodo = listTodo.filter(task => task.description !== description);
  store();

  return true;
}

const loadJson = () => {
  try {
    listTodo = require('../db/data.json');
  } catch(err) {
    listTodo = [];
  }
};

module.exports = {
  list,
  create,
  store,
  update,
  remove
};