const { archivoTareas, guardarTarea, guardarTareas, manejarAcciones } = require('./funcionesDeTareas');

let accion = process.argv[2];
let parametro = process.argv[3];

switch (accion) {
  case 'listar':
    console.log('Tareas existentes:');
    archivoTareas.leerArchivo().forEach((tarea, index) => {
      console.log(`${index}: ${tarea.titulo} - Estado: ${tarea.estado}`);
    });
    break;
  case 'crear':

  let tarea = {
    titulo: parametro,
    estado: 'pendiente'
  };
  guardarTarea(tarea);  
    break;
    case 'filtrar':
      let estado = parametro;
      let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
      console.log(`Tareas ${estado}:`);
      tareasFiltradas.forEach((tarea, index) => {
        console.log(`${index}: ${tarea.titulo} - Estado: ${tarea.estado}`);
      });
      break;
  case undefined:
    console.log('Atención - Tienes que pasar una acción.');
    break;
  default:
    console.log('No entiendo qué quieres hacer.');
}
