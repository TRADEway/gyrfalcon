const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const getItem = (params) => {
  return dynamodb.getItem({
    ...params,
    TableName: process.env.db
  }).promise()
}

const putItem = (params) => {
  return dynamodb.putItem({
    ...params,
    TableName: process.env.db
  }).promise()
}

const query = (params) => {
  return dynamodb.query({
    ...params,
    TableName: process.env.db
  }).promise()
}

const scan = (params) => {
  return dynamodb.scan({
    ...params,
    TableName: process.env.db
  }).promise()
}

const transactWrite = (params) => {
  const transactionRequest = dynamodb.transactWriteItems(params)
  let cancellationReasons
  
  transactionRequest.on('extractError', (response) => {
    try {
        cancellationReasons = JSON.parse(response.httpResponse.body.toString()).CancellationReasons
    } catch (err) {
        // suppress this just in case some types of errors aren't JSON parseable
        console.error('Error extracting cancellation error', err)
    }
  })
  return new Promise((resolve, reject) => {
    transactionRequest.send((err, response) => {
        if (err) {
            err.cancellationReasons = cancellationReasons
            return reject(err)
        }
        return resolve(response)
    })
  })
}

module.exports = {
  dynamodb,
  getItem,
  putItem,
  query,
  scan,
  transactWrite
}