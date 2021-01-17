const getStudents = (req, resp) => {
  return resp.status(200).send({
    msg: 'Este es el endpoint de students',
  })
}

const postStudents = (req, res) => {
  return res.status(201).send({
    msg: 'datos validados correctamente',
  })
}

module.exports = { getStudents, postStudents }
