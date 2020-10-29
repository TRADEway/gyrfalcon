const express = require('express')
const router = express.Router()

const { asyncHandler } = require('../utils')
const phoneLines = require('../controllers/phoneLines')

router.get('/', asyncHandler(phoneLines.index))

router.post('/', asyncHandler(phoneLines.create))

router.get('/:number', asyncHandler(phoneLines.show))

router.patch('/:number', asyncHandler(phoneLines.update))

router.delete('/:number', asyncHandler(phoneLines.delete))

module.exports = router