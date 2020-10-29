const express = require('express')
const router = express.Router()

const phoneLines = require('./phoneLines')
const twilio = require('./twilio')
const users = require('./users')

router.options(`*`, (req, res) => {
  res.status(200).send()
})

router.use('/phoneLines', phoneLines)
router.use('/twilio', twilio)
router.use('/users', users)

router.get(`/*`, (req, res) => {
  res.status(404).send('Route not found')
})

module.exports = router