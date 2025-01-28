// Using Node.js `require()`
const mongoose = require('mongoose');



const ModeloOrdenador = require('./model/Ordenador')







ModeloOrdenador.buscaMayor3000();

ModeloOrdenador.buscaTodos();

ModeloOrdenador.findByIdAndDelete("679902dff607c7791c417e21");

