/* eslint-disable @typescript-eslint/no-var-requires */
/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["stripe_secret_key_test"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const getStripeKey = async () => {
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ['stripe_secret_key_test'].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();
  return Parameters[0].Value;
};

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

/****************************
 * Example post method *
 ****************************/

app.post('/create-stripe-tree', async function (req, res) {
  const stripeKey = await getStripeKey();
  const stripe = require('stripe')(stripeKey);
  const body = req.body;

  try {
    const product = await stripe.products.create({
      name: body.name,
      description: body.description,
      id: body.stripeId,
    });

    const price = await stripe.prices.create({
      unit_amount: body.price,
      currency: 'usd',
      product: product.id,
    });

    res.json({ message: 'Stripe Product Created!', url: req.url, result: { priceId: price.id } });
  } catch (error) {
    console.log('Something went wrong saving a product in stripe/dynamo', error);
  }
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
