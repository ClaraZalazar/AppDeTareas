const fs = require('fs');

let archivoTareas = {
  archivo: 'tareas.json',
  leerArchivo: function () {
    let tareas = fs.readFileSync(this.archivo, 'utf-8');
    let tareasJSON = JSON.parse(tareas);
    return tareasJSON;
  },
  escribirJSON: function (arrayTareas) {
    let datos = JSON.stringify(arrayTareas, null, 2);
    fs.writeFileSync(this.archivo, datos, 'utf-8');
    console.log('Tarea(s) guardada(s) correctamente.');
  },
  filtrarPorEstado: function (estado) {
    let tareasJSON = this.leerArchivo();
    let tareasFiltradas = tareasJSON.filter((tarea) => tarea.estado === estado);
    return tareasFiltradas;
  }
};

function guardarTarea(tarea) {
    let tareasJSON = archivoTareas.leerArchivo();
    tarea.estado = "pendiente"; 
    tareasJSON.push(tarea);
    archivoTareas.escribirJSON(tareasJSON);
    console.log(`Nueva tarea creada: ${tarea.titulo} - Estado: ${tarea.estado}`);
  }
  
function guardarTareas(tareas) {
  archivoTareas.escribirJSON(tareas);
  console.log('Las tareas se han guardado en el archivo tareas.json');
}

function manejarAcciones(accion, parametro) {
  switch (accion) {
    case 'listar':
      archivoTareas.leerArchivo().forEach((tarea, index) => {
        console.log(`${index}: ${tarea.titulo} - Estado: ${tarea.estado}`);
      });
      break;
    case 'crear':
      guardarTarea(parametro);
      break;
    case 'filtrar':
      let estado = parametro;
      let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
      tareasFiltradas.forEach((tarea, index) => {
        console.log(`${index}: ${tarea.titulo} - Estado: ${tarea.estado}`);
      });
      break;
    default:
      console.log('No entiendo qué quieres hacer.');
  }
}

module.exports = {
  archivoTareas,
  guardarTarea,
  guardarTareas,
  manejarAcciones
};





