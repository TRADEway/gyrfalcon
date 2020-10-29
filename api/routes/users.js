const express = require('express')
const router = express.Router()

const { asyncHandler } = require('../utils')
const users = require('../controllers/users')

router.get('/', asyncHandler(users.index))

router.post('/', asyncHandler(users.create))

router.get('/:username', asyncHandler(users.show))

router.patch('/:username', asyncHandler(users.update))

router.delete('/:username', asyncHandler(users.delete))

module.exports = router