const mongoose = require('mongoose');
const port = 3000;
const app = require('./app.js');

mongoose.connect('mongodb://localhost:27017/usuariosFS', {useNewUrlParser: true, useUnifiedTopology: true}, (error, res) =>{
    if(error){
        console.error('Error en la conexión', error);
    }else{
        console.log('Conexión exitosa');
        app.listen( port, ()=>{
            console.log('Estamos escuchando en el puerto', port);
        })
    }
})