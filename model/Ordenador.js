const mongoose = require('mongoose');

  //Esquema del documento
  const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
})


// Definición del modelo

const Ordenador = mongoose.model('Ordenador', ordenadorSchema, 'ordenadores');

const buscaPrimero = ()=>{
    Ordenador.findOne()
    .then(ordenador=>{
        if(ordenador){
            console.log("ordenador encontrado", ordenador)
        }else{
            console.log("ordenador no encontrado")
        }
    }).catch(err=>console.error('Error al obtener el ordenador',err));

}

const buscaTodos = () =>{
    Ordenador.find()
    .then(ordenadores=>{
        if(ordenadores.length > 0){
            console.log("ordenadores encontrados", ordenadores)
        }else{
            console.log("ordenadores no encontrado")
        }
    }).catch(err=>console.error('Error al obtener los ordenadores',err));
}

const idBuscado = "679902dff607c7791c417e21";

const buscaPorId = (id)=>{
    Ordenador.findById(id)
    .then(ordenador=>{
        if(ordenador){
            console.log(`ordenador con id ${id} encontrado`, ordenador)
        }else{
            console.log("ordenador no encontrado")
        }
    }).catch(err=>console.error('Error al obtener el ordenador',err));

}

const buscaMayor3000 = () => {
    Ordenador.find({ precio: { $gt: 3000 } })  // Cambiado a 3000 para mayor claridad
        .then(ordenadores => {
            if (ordenadores.length > 0) {  // Verifica si el array tiene elementos
                console.log("Ordenadores con precio mayor de 3000 encontrados:", ordenadores);
            } else {
                console.log("Ningún ordenador de más de 3000 encontrado");
            }
        })
        .catch(err => console.error('Error en la búsqueda', err));
};

 // Crear un nuevo ordenador
 const nuevoOrdenador = new Ordenador({
    marca: 'Apple',
    precio: 3000
  });
  // Guardar el ordenador en la base de datos
  nuevoOrdenador.save()
    .then(ordenador => console.log('Ordenador guardado:', ordenador))
    .catch(err => console.error('Error al guardar el ordenador:', err));
   
  // Actualizar un ordenador
  const idOrdenador = '679149758be34bca122b2575';
  const nuevoPrecio = 9000;
  //el tercer parametro ( { new: true } ) es para que devuelva el documento actualizado
  Ordenador.findByIdAndUpdate(idOrdenador, { precio: nuevoPrecio }, { new: true })
    .then(ordenadorActualizado => {
      if (ordenadorActualizado) {
        console.log('Ordenador actualizado:', ordenadorActualizado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al actualizar el ordenador:', err));
      // Eliminar un ordenador
  const idOrdenadorParaBorrar = '679149758be34bca122b2575';
  const findByIdAndDelete = (idOrdenadorParaBorrar) => Ordenador.findByIdAndDelete(idOrdenadorParaBorrar)
    .then(ordenadorEliminado => {
      if (ordenadorEliminado) {
        console.log('Ordenador eliminado:', ordenadorEliminado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al eliminar el ordenador:', err));
    //insertar varios registros
    // Datos de los ordenadores a insertar
  const ordenadores = [
    { marca: 'Asus',  precio: 2800 },
    { marca: 'Lenovo', precio: 2000 }
  ];
  // Insertar los ordenadores
  const crearOrdenadores = () => Ordenador.create(ordenadores)
    .then(ordenadoresCreados => {
      console.log('Ordenadores creados:', ordenadoresCreados);
    })
    .catch(err => console.error('Error al crear los ordenadores:', err));
  
  
module.exports = {buscaTodos, buscaPrimero, buscaPorId, buscaMayor3000, findByIdAndDelete ,Ordenador}