const Client = require('../Models/Client');


function create(req, res){
    var client = new Client(); // Indica que se va a crear un nuevo cliente
    var params = req.body; // indica que los parametros o información vendran del body
    
    client.firstName = params.firstName;
    client.lastName = params.lastName;
    client.email = params.email;
    client.phone = params.phone;
    client.identification = params.identification;
    client.password = params.password; 
    client.typeUser = params.typeUser;

    client.save( (error, clientcreated) =>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!clientcreated){
                res.status(400).send({
                    statusCode:400,
                    message:"Error al crear el cliente"
                })
            }else{
                res.status(200).send({
                    statusCode:200,
                    message: "Cliente creado correctamente",
                    clientData: clientcreated
                })
            }
        }
    } )

}

function update(req, res){
    var infoClient = req.body;
    var id = req.params.id;

    Client.findByIdAndUpdate(id, infoClient, (error, clientUpdated) =>{ // Se configura un error y la información ha actualizar
        if(error){
            res.send({
                message: "EUPS",
                statusCode: 500
            })
        }else{
            if(!clientUpdated){
                res.send({
                    message: "Error al actualizar el cliente",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Cliente modificado con exito",
                    statusCode: 200,
                    infoClient: clientUpdated
                })
            }
        }
    })
}


function remove(req, res){
    var id = req.params.id;

    Client.findByIdAndDelete(id, (error, clientRemoved) =>{
        if(error){
            res.send({
                message: "Error al conectar al servidor",
                statusCode: 500
            })
        }else{
            if(!clientRemoved){
                res.send({
                    message: "Error al borrar el cliente",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Cliente eliminado",
                    statusCode: 200,

                })
            }
        }
    })
}

function list(req, res){
    var user = req.params.typeUser;

    Client.find({}, (error, userListed) =>{
        if(error){
            res.send({
                message: "Error al conectar al servidor",
                statusCode: 500
            })   
        }else{
            res.send({
                message: "Todos los usuarios",
                dataUsers: userListed,
                statusCode: 200,
            })
        }
    } )
}
function getClient (req, res){
    var id = req.params.id;
    Client.findById(id, (error, clientListed) =>{
        if(error){
            res.send({
                message: "Error al conectar al servidor",
                statusCode: 500
            })   
        }else{
            res.send({
                message: "Todos los usuarios",                
                statusCode: 200,
                dataClient: clientListed,
            })
        }
    } )
}
function login (req, res){
    let params = req.body;
    Client.findOne({email:params.email}, (error, userLogged) => {
        if(error){
            res.send({
                message: "Error de conexion",
                statusCode: 500
            })
        }else{
            if(!userLogged){
                res.status(200).send({
                    message: "Datos incorrectos",
                    statusCode: 400
                })
            }else{
                if (params.password == userLogged.password){
                    res.send({
                        message: "Bienvenido a Salud y Forma",
                        statusCode: 200,
                        dataClient: userLogged
                    })
                }else{
                    res.send({
                        statusCode: 204,
                        message: "Datos Incorrectos"
                    })
                }
            }
        }
    })
}


// Aca se exportar las diferentes funciones 
module.exports = { 
    create,
    update,
    remove,
    list,
    getClient,
    login
}