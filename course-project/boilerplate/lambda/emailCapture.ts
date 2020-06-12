/// <reference types="aws-sdk" />
const AWS = require("aws-sdk");

const createResponse = (
  body: string | AWS.DynamoDB.DocumentClient.ItemList,
  statusCode = 200
) => {
  return {
      statusCode,
      body: JSON.stringify(body, null, 2)
  };
};

// TODO: Methods go here!

exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
    try {
    
      // TODO: HTTP methods go here!

    } catch (error) {
        console.log(error);
        return createResponse(error, 500);
    }
};