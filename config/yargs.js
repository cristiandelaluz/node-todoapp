const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
  .command('crear', 'Crea una nueva tarea por hacer', { descripcion })
  .command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion,
    completado: {
      default: true,
      alias: 'c',
      desc: 'Marca como completado la tarea'
    }
  })
  .command('eliminar', 'Elimina una tarea seleccionada por su descripción', { descripcion })
  .help()
  .argv;

module.exports = {
  argv
};
