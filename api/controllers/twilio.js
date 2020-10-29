const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const collect = require('collect.js')

const availablePhoneNumbers = (req, res, next) => {
  let availablePhoneNumbers = client.availablePhoneNumbers
  
  if(req.params.type) {
    if (!['local', 'tollFree', 'mobile'].includes(req.params.type)) {
      res.status(400).json({
        error: 'Bad number type, must be one of: local, tollFree, mobile'
      })
    }
    availablePhoneNumbers = availablePhoneNumbers(
      req.params.countryCode
    )[req.params.type].list(req.body)
  } else if(req.params.countryCode) {
    availablePhoneNumbers = availablePhoneNumbers(req.params.countryCode).fetch()
  } else {
    availablePhoneNumbers = availablePhoneNumbers.list(req.body)
  }
  availablePhoneNumbers
    .then(response => res.json(response))
    .catch(
      error => res.status(error.status).json({
        code: error.code,
        moreInfo: error.moreInfo,
        details: error.details
      })
    )
}

const createIncomingPhoneNumber = (req, res, next) => {
  client.incomingPhoneNumbers
    .create(req.body)
    .then(incomingPhoneNumber => res.json(incomingPhoneNumber))
    .catch(error => res.status(error.code).json(error))
}

const incomingPhoneNumbers = (req, res, next) => {
  client.incomingPhoneNumbers
    .list(req.query)
    .then(incomingPhoneNumbers => res.json(
      collect(incomingPhoneNumbers)
        .map(number => collect(number).only([
          'capabilities',
          'dateCreated',
          'dateUpdated',
          'friendlyName',
          'phoneNumber',
          'sid',
          'voiceUrl',
          'smsUrl'
        ]))
    ))
}

module.exports = {
  availablePhoneNumbers,
  createIncomingPhoneNumber,
  incomingPhoneNumbers
}