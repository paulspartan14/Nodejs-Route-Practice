const express = require('express')
const router = express.Router()
const { getStudents, postStudents } = require('../controllers/students')
const { validate } = require('../middlewares/validator')

router.get('/', getStudents)
router.post('/', validate, postStudents)

module.exports = router
