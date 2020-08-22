const userModel = require('../models/user.model');
const userController = {}

//get
userController.list = (req, res) => {
    userModel.findAll().then( (consult) => {
        console.log(consult);
        res.json(consult);
    })
    .catch(err => {
        console.log('Error en findAll');
        res.status(500).json(err);
    });
}

//post
userController.insert = (req, res) => {
    const { 
        UsuGrupo, UsuUsuario, UsuNombre, UsuClave, UsuCorreo, UsuTelefono
    } = req.body;
    console.log(req.body);
    userModel.create({
        UsuGrupo, UsuUsuario, UsuNombre, UsuClave, UsuCorreo, UsuTelefono
    }).then(() => {
      res.status(200).json({
        status: "OK",
        message: "Data actualizada"
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

//Update
userController.update = (req, res) => {
    const UsuUsuario = req.params.UsuUsuario;
    const { UsuGrupo, UsuNombre, UsuClave, UsuCorreo, UsuTelefono } = req.body;
    userModel.update( { UsuGrupo, UsuNombre, UsuClave, UsuCorreo, UsuTelefono },{ where: { UsuUsuario } })
    .then(() => {
        res.status(200).send("updated successfully, user: " + UsuUsuario);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  }

userController.delete = (req, res) => {
    const { UsuUsuario } = req.params;
    userModel.destroy({
      where: { UsuUsuario }
    }).then(() => {
      res.status(200).send('deleted successfully, UsuUsuario: ' + UsuUsuario);
    });
  }


module.exports = userController;