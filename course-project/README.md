# The Project

## The Brief

Our client wants to build up a subscriber list to market their new product. The client is paying for AWS and wants us to use it for this project. You are a full-stack engineer and your project manager has tasked you with finding a way to store all the subscriber's emails and creating a way to capture subscriber emails.

The frontend team has come up with a couple of prototypes for the frontend form. You could either wire up one of their prototypes or roll your own!

Your project manager recommends you use the command `cdk init` to save time. AWS CDK converts into JSON/YAML so the language you implement this feature in is completely up to you! If you need assistance with setting up the project the backend team has a suggested configuration for this type of project. You can browse or copy the [Backend Starter](https://github.com/Creeland/AWS-CDK-Backend-Starter) that has the set up done for you if you don't want to start completely from scratch.


## Requirements:

- [ ] Wire up a form for users to input their email
- [ ] Handle user input with AWS Lambda
- [ ] Store that email on AWS using DynamoDB

### Stretch Goals
- [ ] Display emails on the page
- [ ] Delete emails from the list
- [ ] Add the company logo to the form

## Project Steps

Create helloworld lambda and test in AWS console ([lessons 05](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/blob/master/05-create-and-deploy-a-lambda-function-with-aws-cdk.md))

Create an API gateway for your lambda function ([lesson 08](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/blob/master/08-attach-an-api-gateway-to-a-lambda-function-deployed-with-aws-cdk.md))

Create a DynamoDB table inside your Backend Construct ([lesson 16](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/blob/master/16-create-a-dynamo-db-table-with-aws-cdk.md))

Handle POST request inside of your lambda function that adds data to DynamoDB (lesson 17 - 21)

Create a frontend that takes user input and POSTs to your AWS endpoint ([lesson 22](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/blob/master/22-connect-react-app-to-a-serverless-backend-deployed-with-cdk-and-fix-cors-issues.md))

Deploy your front end to AWS ([lesson 24](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/blob/master/24-deploy-a-static-website-to-s3-with-aws-cdk.md))

## Form Prototypes

- [React form](https://codesandbox.io/s/nervous-lalande-m9xgb?file=/src/App.js)
- [Vue form](https://github.com/Creeland/AWS-CDK-Vue-Frontend)
