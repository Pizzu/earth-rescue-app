/* eslint-disable @typescript-eslint/no-var-requires */
/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["stripe_secret_key"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_EARTHRESCUEAPI_GRAPHQLAPIIDOUTPUT
	API_EARTHRESCUEAPI_TREETABLE_ARN
	API_EARTHRESCUEAPI_TREETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();

const getStripeKey = async () => {
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ['stripe_secret_key'].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();
  return Parameters[0].Value;
};

exports.handler = async (event) => {
  const stripeKey = await getStripeKey();
  const stripe = require('stripe')(stripeKey);
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    if (record.eventName === 'INSERT') {
      const dbItem = record.dynamodb.NewImage;
      try {
        const product = await stripe.products.create({
          name: dbItem.name.S,
          description: dbItem.description.S,
          id: dbItem.id.S,
        });

        const price = await stripe.prices.create({
          unit_amount: dbItem.price.N,
          currency: 'usd',
          product: product.id,
        });

        const params = {
          TableName: process.env.API_EARTHRESCUEAPI_TREETABLE_NAME,
          Item: {
            ...dbItem,
            priceId: {
              S: price.id,
            },
          },
        };

        await dynamodb.putItem(params).promise();
      } catch (error) {
        console.log('Something went wrong saving a product in stripe/dynamo', error);
      }
    }
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
