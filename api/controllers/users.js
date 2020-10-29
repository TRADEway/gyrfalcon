const dynamodb = require('../database')
const {User, Email} = require('../models')

const index = async (req, res, next) => {
  let users = []
  let exclusiveStartKey = ''
  const params = {
    IndexName: 'UserIndex'
  }
  while (true) {
    if (exclusiveStartKey) {
      params.ExclusiveStartKey = exclusiveStartKey
    }
    const results = await dynamodb.scan(params)
    if (results.Items) {
      users = users.concat(
        results.Items.map((item) => { return User.fromItem(item) })
      )
    }
    if (results.LastEvaluatedKey) {
      exclusiveStartKey = results.LastEvaluatedKey
    } else {
      break
    }
  }
  return res.json(users)
}

const create = async (req, res, next) => {
  const data = req.body
  
  if (!data.email) {
    throw new Error(`"email" is required`)
  }
  if (!data.name) {
    throw new Error(`"name" is required`)
  }
  if (!data.username) {
    throw new Error(`"username" is required`)
  }
  
  const user = new User({
    username: data.username,
    email: data.email,
    name: data.name,
    roles: []
  })
  
  const email = new Email({
    email: data.email,
    username: data.username
  })
  
  try {
    const params = {
      TransactItems: [
        {
          Put: {
            Item: user.toItem(),
            TableName: process.env.db,
            ConditionExpression: "attribute_not_exists(PK)"
          },
        },
        {
          Put: {
            Item: email.toItem(),
            TableName: process.env.db,
            ConditionExpression: "attribute_not_exists(PK)"
          },
        }
      ]
    }
    await dynamodb.transactWrite(params)
    res.json({
      user
    })
  } catch(error) {
    console.log('Error creating customer')
    console.log(error)
    let errorMessage = 'Could not create customer'
    // If it's a condition check violation, we'll try to indicate which condition failed.
    if (error.code === 'TransactionCanceledException') {
      if (error.cancellationReasons[0].Code === 'ConditionalCheckFailed') {
        errorMessage = 'Customer with this username already exists.'
      } else if (error.cancellationReasons[1].Code === 'ConditionalCheckFailed') {
        errorMessage = 'Customer with this email already exists.'
      }
    }
    res.json({
      error: errorMessage
    })
  }
}

const show = async (req, res, next) => {
  const lookup = new User({
    username: req.params.username
  })
  
  const resp = await dynamodb.getItem({
    Key: lookup.key()
  })
  if (!resp.Item) {
    return res.status(404).json({ error: 'User does not exist.' })
  }
  return res.json(User.fromItem(resp.Item))
}

const update = function(req, res, next) {
  res.send('NOT IMPLEMENTED: User update');
}

const destroy = function(req, res, next) {
  res.send('NOT IMPLEMENTED: User delete');
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
}
