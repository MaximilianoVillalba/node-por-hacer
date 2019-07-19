const descripcion = {
    demand: true,
    alias: 'd',
};

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea del listado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}