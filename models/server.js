const express = require("express");
const cors =  require('express');

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();


    // Rutas de mi aplicacion
    this.routes();


  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    // Lectura y parseo del body

    this.app.use( express.json() );

    this.app.use( express.static('public') )

  }

  routes() {

    this.app.use(this.usuariosPath, require('../routes/usuarios'));

  }

  listen() {
    this.app.listen( this.port, () => {
        console.log('Servidor corriendo en el puerto', this.port );
    })
  }

}

module.exports = Server;
