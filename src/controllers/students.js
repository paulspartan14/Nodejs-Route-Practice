/**
 * @function getStudents
 * @description Controller for POST /api/users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */

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
