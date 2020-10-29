const dynamodb = require('../database')
const {PhoneLine} = require('../models')

const index = async (req, res, next) => {
  let phoneLines = []
  let exclusiveStartKey = ''
  const params = {
    IndexName: 'PhoneLineIndex'
  }
  while (true) {
    if (exclusiveStartKey) {
      params.ExclusiveStartKey = exclusiveStartKey
    }
    const results = await dynamodb.scan(params)
    if (results.Items) {
      phoneLines = phoneLines.concat(
        results.Items.map((item) => { return PhoneLine.fromItem(item) })
      )
    }
    if (results.LastEvaluatedKey) {
      exclusiveStartKey = results.LastEvaluatedKey
    } else {
      break
    }
  }
  return res.json(phoneLines)
}

const create = async (req, res, next) => {
  const data = req.body
  
  if (!data.number) {
    throw new Error(`"number" is required`)
  }
  
  const phoneLine = new PhoneLine({
    number: data.number,
    username: data.username
  })
  
  try {
    await dynamodb.putItem({
      Item: phoneLine.toItem(),
      ConditionExpression: 'attribute_not_exists(PK)'
    })
    res.json({
      phoneLine
    })
  } catch(error) {
    console.log('Error creating phoneLine')
    console.log(error)
    let errorMessage = 'Could not create phoneLine'
    // If it's a condition check violation, we'll try to indicate which condition failed.
    if (error.code === 'ConditionalCheckFailedException') {
      errorMessage = 'PhoneLine with this number already exists.'
    }
    res.json({
      error: errorMessage
    })
  }
}

const show = async (req, res, next) => {
  const lookup = new PhoneLine({
    number: req.params.number
  })
  const resp = await dynamodb.getItem({
    Key: lookup.key()
  })
  if (!resp.Item) {
    return res.status(404).json({ error: 'PhoneLine does not exist.' })
  }
  return res.json(PhoneLine.fromItem(resp.Item))
}

const update = function(req, res, next) {
  res.send('NOT IMPLEMENTED: PhoneLine update');
}

const destroy = function(req, res, next) {
  res.send('NOT IMPLEMENTED: PhoneLine delete');
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
}
