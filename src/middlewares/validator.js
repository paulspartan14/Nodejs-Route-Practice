const validate = (req, res, next) => {
  // Si el body esta vacio
  if (Object.keys(req.body).length < 1) {
    res.status(400).send({
      status: 400,
      msj: 'faltan campos por ingresar',
    })
  }
  // si no existe la propiedad 'name'
  else if (req.body.hasOwnProperty('name') === false) {
    res.status(400).send({
      status: 400,
      msj: 'no existe el campo name, porfavor ingresalo',
    })  
  }
  // si no existe la propiedad 'lastName'
  else if (req.body.hasOwnProperty('lastName') === false) {
    res.status(400).send({
      status: 400,
      msj: 'no existe el campo lastName, porfavor ingresalo',
    })
  }
  // si el objeto recibido tiene mas de 5 campos tiene campos extra no requeridos
  else if (Object.keys(req.body).length > 5) {
    res.status(400).send({
      status: 400,
      msj: 'hay campos extra no necesarios',
    })
  }
  next()
}

module.exports = { validate }
