const express = require('express')
const router = express.Router()

const { asyncHandler } = require('../utils')
const twilio = require('../controllers/twilio')

router.post('/availablePhoneNumbers/:countryCode?/:type?', asyncHandler(twilio.availablePhoneNumbers))
router.get('/incomingPhoneNumbers', asyncHandler(twilio.incomingPhoneNumbers))
router.post('/incomingPhoneNumbers', asyncHandler(twilio.createIncomingPhoneNumber))

module.exports = router