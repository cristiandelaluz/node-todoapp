const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let command = argv._[0];

const listWithSchema = () => {
  const list = todo.list();
  console.log('====================================');
  for(let task of list) {
    console.log(`${ task.description } - ${ task.complete ? colors.green('COMPLETADA') : colors.yellow('PENDIENTE') }`);
  }
  console.log('====================================');
};

switch(command) {
  case 'crear':
    const task = todo.create(argv.descripcion);
    todo.store();
    console.log(task);
    break;

  case 'listar':
    listWithSchema();
    break;

  case 'actualizar':
    if (todo.update(argv.descripcion, JSON.parse(argv.completado))) {
      console.log('La tarea ha sido actualizada');
      listWithSchema();
    } else {
      console.log('La tarea no existe');
    }
    break;

  case 'eliminar':
    if (todo.remove(argv.descripcion)) {
      console.log('La tarea ha sido eliminada')
      // listWithSchema();
    } else {
      console.log('La tarea no existe');
    }
    break;

  default:
    console.log('Comando no encontrado');
}
